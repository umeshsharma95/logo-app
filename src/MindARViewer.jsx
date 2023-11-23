import React, { useEffect, useRef } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const data = new Array(18).fill(null);

export default ({ setImageDetected, imageDetected }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if(!imageDetected) {
      const scanningOverlay = document.querySelector('#example-scanning-overlay');
      scanningOverlay.style.display = 'flex'
    }
  }, [imageDetected])

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener('renderstart', () => {
      console.log('arSystem', arSystem);
      // arSystem?.start(); // start AR
    });
    const scanningOverlay = document.querySelector('#example-scanning-overlay');
    data.forEach((_, index) => {
      const imageTarget = document.getElementById(
        `mindar-image-target_${index}`
      );
      imageTarget.addEventListener('targetFound', (event) => {
        scanningOverlay.style.display = 'none'
        console.log('targetFound', index);
        setImageDetected(true);
      });
      imageTarget.addEventListener('targetLost', (event) => {
        console.log('target lost');
        // setImageDetected(false)
      });
    });
    return () => {
        // arSystem?.stop();
    };
  }, []);

  return (
    <>
      <div id="example-scanning-overlay">
        <div className="inner">
          <div className="scanline"></div>
        </div>
      </div>
      <a-scene
        ref={sceneRef}
        mindar-image="imageTargetSrc: ./targets.mind; uiScanning: #example-scanning-overlay;"
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        {data.map((_, index) => (
          <a-entity
            key={`mindar-image-target_${index}`}
            mindar-image-target={`targetIndex: ${index}`}
            id={`mindar-image-target_${index}`}
          >
          </a-entity>
        ))}
      </a-scene>
    </>
  );
};
