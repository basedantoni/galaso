import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from "/node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "/node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Sun = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const refBloomComposer = useRef()
  const refCamera = useRef()

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    const { current: bloomComposer } = refBloomComposer
    const { current: camera } = refCamera
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
      bloomComposer.setSize(scW, scH)
      camera.aspect = scW / scH;
      camera.updateProjectionMatrix();
    }


  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(-0.5, 0, 0)
      const initialCameraPosition = new THREE.Vector3(
          20 * Math.sin(0.6 * Math.PI),
          10,
          20 * Math.cos(0.6 * Math.PI)
        )
        
        // 640 -> 240
        // 8   -> 6
        // How far or close the camera is to the object
        const scale = scH * 0.005 + 0.8
        const camera = new THREE.OrthographicCamera(
          -scale,
          scale,
          scale,
          -scale,
          0.01,
          50000
        )
        camera.position.copy(initialCameraPosition)
        camera.lookAt(target)
        refCamera.current = camera
          
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
        scene.add(ambientLight)
        scene.add(camera)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      //bloom renderer
      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
      );
      bloomPass.threshold = 0;
      bloomPass.strength = 1.5; //intensity of glow
      bloomPass.radius = 1.25;
      const bloomComposer = new EffectComposer(renderer);
      bloomComposer.setSize(container.clientWidth, container.clientWidth);
      bloomComposer.renderToScreen = true;
      bloomComposer.addPass(renderScene);
      bloomComposer.addPass(bloomPass);

      refBloomComposer.current = bloomComposer

      //sun object
      const color = new THREE.Color("#F49367");
      const geometry = new THREE.IcosahedronGeometry(1, 15);
      const material = new THREE.MeshBasicMaterial({ color: color });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(0, 0, 0);
      sphere.layers.set(1);
      scene.add(sphere);


      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 1000) * Math.PI * 10

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        camera.layers.set(1);
        bloomComposer.render()
      }

      animate()

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <div className='w-96 h-96' ref={refContainer}></div>
  )
}

export default Sun
