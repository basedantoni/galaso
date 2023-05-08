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
    const modelMeshes = [];
    let boundingBox;
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize(isMedium);
    test.animate(isMedium);

    // Update the onMouseMove function
    function onMouseMove(event) {
      // Normalize mouse coordinates (-1 to +1)
      test.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      test.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update the raycaster with the current camera and mouse positions
      test.raycaster.setFromCamera(test.mouse, test.camera);

      // Test for intersections with objects in the scene
      const intersects = test.raycaster.intersectObjects(modelMeshes, true);

      if (intersects.length > 0) {
        // The first intersected object is the closest one to the camera
        const hoveredObject = intersects[0].object;

        // Check if the hovered object is part of the GLTF model
        if (loadedModel && loadedModel.scene.children.includes(hoveredObject)) {
          // Change the cursor style to a pointer
          document.body.style.cursor = 'pointer';
          // Disable model rotation
          test.modelRotationEnabled = false;
        } else {
          // Revert the cursor style back to the default
          document.body.style.cursor = 'default';
          // Enable model rotation
          test.modelRotationEnabled = true;
        }
      } else {
        // Revert the cursor style back to the default
        document.body.style.cursor = 'default';
        // Enable model rotation
        test.modelRotationEnabled = true;
      }
    }   

    function onClick(event) {
      // Calculate normalized device coordinates (NDC) of mouse click
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
    
      // Set up a raycaster using the camera and mouse coordinates
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, test.camera);
    
      // Test for intersections with objects in the scene
      const intersects = raycaster.intersectObjects(modelMeshes, true);
    
      if (intersects.length > 0) {
        console.log('Clicked on GLTF model');
        const externalUrl = 'https://jacobsfirststore-1319-2.myshopify.com/';
        window.open(externalUrl, '_blank', 'noopener,noreferrer');
      }
    }

    function onTouchStart(event) {
      console.log('touch')
      if (event.touches.length === 1) {
        onClick(event.touches[0]);
      }
    }
    
    function onTouchEnd(event) {
      if (event.changedTouches.length === 1) {
        onClick(event.changedTouches[0]);
      }
    }    

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('click', onClick, false);
    window.addEventListener('touchstart', onTouchStart, false);
    window.addEventListener('touchend', onTouchEnd, false);

    const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    // Font
    const fontLoader = new FontLoader();
    const ttfLoader = new TTFLoader();
    ttfLoader.load('fonts/waukegan.ttf', (json) => {
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
      const text = isMedium ? `STARGAZING TEE 
             

      







    IN THE DARK` : 
      `STARGAZING TEE 
             












      
    IN THE DARK`
      const comingSoonTextGeo = new TextGeometry(text, {
        height: isMedium ? 1.0 : 1.5,
        size: isMedium ? 3.0 : 1.75,
        font: boskFont,
      });
      const comingSoonTextColor = 0xBD0A11;
      const comingSoonTextMaterial = new THREE.MeshStandardMaterial({ color: comingSoonTextColor });
      const comingSoonTextMesh = new THREE.Mesh(comingSoonTextGeo, comingSoonTextMaterial);
      comingSoonTextMesh.position.x = isMedium ? -16.65 : -9;
      comingSoonTextMesh.position.y = isMedium ? 15 : 13;
      comingSoonTextMesh.position.z = isMedium ? -12 : -8;
      test.scene.add(comingSoonTextMesh);
    });

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('tee-v3.gltf', (gltfScene) => {
      // After loading the GLTF model, assign it to the test instance
      test.loadedModel = gltfScene;
      loadedModel = gltfScene;

      gltfScene.scene.children[0].traverse(n => {
        if (n.isMesh) {
          n.castShadow = true;
          n.receiveShadow = true;
          if(n.material.map) n.material.map.anisotropy = 16;
        }
      })

      gltfScene.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          modelMeshes.push(child);
        }
      });
      
      const box3 = new THREE.Box3().setFromObject(gltfScene.scene);
      const size = new THREE.Vector3();
      box3.getSize(size);
      const geometry = new THREE.BoxGeometry(size.x * 2, size.y * 10, size.z);
      const material = new THREE.MeshBasicMaterial({ visible: false });
      boundingBox = new THREE.Mesh(geometry, material);
      boundingBox.position.y = isMedium ? -15 : -10;
      boundingBox.position.x = isMedium ? -1 : 0.5;

      gltfScene.scene.rotation.y = Math.PI / 5;
      gltfScene.scene.position.y = isMedium ? -1 : 0;
      gltfScene.scene.position.x = isMedium ? -1 : 0.3;
      isMedium ? gltfScene.scene.scale.set(2.75, 2.75, 2.75) : gltfScene.scene.scale.set(2.3, 2.3, 2.3);
      test.scene.add(gltfScene.scene);
    });


    // Add a cleanup function to remove event listeners when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', onMouseMove, false);
      window.removeEventListener('click', onClick, false);
      window.removeEventListener('touchstart', onTouchStart, false);
      window.removeEventListener('touchend', onTouchEnd, false);
    };
  }, [isMedium]);

  return (
    <canvas id="myThreeJsCanvas" />
  );
}

export default App;