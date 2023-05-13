import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export default class SceneInit {
  constructor(canvasId) {
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.mouse = undefined;
    this.raycaster = undefined;

    // NOTE: Camera params;
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    // NOTE: Additional components.
    this.clock = undefined;
    this.controls = undefined;

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;

    this.modelRotationEnabled = true;
  }

  initialize(isMedium) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 48;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // NOTE: Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
    });
    // Set the pixel ratio of the WebGLRenderer
    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ReinhardToneMapping;
    this.renderer.toneMappingExposure = 2.0;
    this.renderer.shadowMap.enabled = true;
    // this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement);

    // SHOWS THE AXES
    // this.scene.add(new THREE.AxesHelper(500))

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = true;

    /* DISABLE Z MOVEMENT */
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.minPolarAngle = Math.PI / 2;

    this.controls.update()

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0x404040, 1.1);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    // HEMISPHERE LIGHT
    const upColor = 0xffeeb1
    const downColor = 0x080820
    this.hemisphereLight = new THREE.HemisphereLight(upColor, downColor, 1.5);
    this.scene.add(this.hemisphereLight)

    // directional light - parallel sun rays
    this.spotLight = new THREE.SpotLight(0xffeeb1, 4, 1000, Math.PI / 1.2, 0);
    this.spotLight.castShadow = true;
    this.spotLight.shadow.bias = -0.0001
    this.spotLight.shadow.mapSize.width = 1024*4;
    this.spotLight.shadow.mapSize.height = 1024*4;
    this.scene.add(this.spotLight);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);

    // NOTE: Load space background.
    this.loader = new THREE.TextureLoader();
    this.scene.background = this.loader.load('/space.webp');

    // NOTE: Declare uniforms to pass into glsl shaders.
    // this.uniforms = {
    //   u_time: { type: 'f', value: 1.0 },
    //   colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
    //   colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
    // };
  }

  animate(isMedium) {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.controls.update();

    this.spotLight.position.set(
      isMedium ? 100 : 100,
      this.camera.position.y + 20,
      this.camera.position.z + 10,
    )

    // Check if modelRotationEnabled is true
    if (this.modelRotationEnabled && this.loadedModel) {
      // Apply the rotation to the model
      this.loadedModel.scene.rotation.y += 0.003;
    }
  }

  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}