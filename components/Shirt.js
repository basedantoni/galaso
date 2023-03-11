import { useEffect } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { useMediaQuery } from '../hooks/useMediaQuery';

import SceneInit from '../lib/sceneInit';

function App() {
  const isMedium = useMediaQuery('(min-width: 768px)');
  
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    // Font
    const fontLoader = new FontLoader();
    const ttfLoader = new TTFLoader();
    ttfLoader.load('fonts/Porcine-Bosk.ttf', (json) => {
      // First parse the font.
      const jetBrainsFont = fontLoader.parse(json);
      // Use parsed font as normal.
      const textGeometry = new TextGeometry('CLICK ME', {
        height: isMedium ? 5 : 2.5,
        size: isMedium ? 12 : 4,
        font: jetBrainsFont,
      });
      const textMaterial = new THREE.MeshNormalMaterial();
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.x = isMedium ? -29.5 : -9.75;
      textMesh.position.y = -1;
      textMesh.position.z = isMedium ? -10 : -8;
      test.scene.add(textMesh);
    });

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;

      // gltfScene.scene.rotation.y = Math.PI / 5;
      gltfScene.scene.position.y = 3;
      gltfScene.scene.scale.set(0.01, 0.01, 0.01);
      test.scene.add(gltfScene.scene);
    });

    const animate = () => {
      if (loadedModel) {
        // loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.01;
        // loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener( 'mousedown', onDocumentMouseDown, false );

    function onDocumentMouseDown( event ) 
    {
        console.log("Click.");
        const canvasDomElement = document.getElementById('myThreeJsCanvas');

        if (canvasDomElement) {
          document.body.removeChild(canvasDomElement);
        }
    }
  }, [isMedium]);

  return (
    <canvas id="myThreeJsCanvas" />
  );
}

export default App;