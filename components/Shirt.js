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
      const boskFont = fontLoader.parse(json);

      // Use parsed font as normal.
      // const textGeometry = new TextGeometry('BUY NOW', {
      //   height: isMedium ? 3.5 : 2.5,
      //   size: isMedium ? 12.5 : 4,
      //   font: boskFont,
      // });
      // const textMaterial = new THREE.MeshNormalMaterial();
      // const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      // textMesh.position.x = isMedium ? -29 : -9.75;
      // textMesh.position.y = -1;
      // textMesh.position.z = isMedium ? -12 : -8;
      // test.scene.add(textMesh);

      // COMING SOON TEXT
      const comingSoonTextGeo = new TextGeometry('COMING SOON', {
        height: isMedium ? 3.5 : 2.5,
        size: isMedium ? 9 : 2.5,
        font: boskFont,
      });
      const comingSoonTextMaterial = new THREE.MeshNormalMaterial();
      const comingSoonTextMesh = new THREE.Mesh(comingSoonTextGeo, comingSoonTextMaterial);
      comingSoonTextMesh.position.x = isMedium ? -32 : -9;
      comingSoonTextMesh.position.y = -1;
      comingSoonTextMesh.position.z = isMedium ? -12 : -8;
      test.scene.add(comingSoonTextMesh);
    });

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;

      gltfScene.scene.rotation.y = Math.PI / 5;
      gltfScene.scene.position.y = 3;
      gltfScene.scene.position.x = isMedium ? -1 : 0;
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

    //SHOPIFY CLICK UNCOMMENT FOR LAUNCH
    // document.addEventListener( 'mousedown', onDocumentMouseDown, false );

    function onDocumentMouseDown( event ) 
    {
        // Add redirect to shopify store
    }
  }, [isMedium]);

  return (
    <canvas id="myThreeJsCanvas" />
  );
}

export default App;