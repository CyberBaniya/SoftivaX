import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Robot3D = ({ mousePos, scrollY }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 650;

    // --- SCENE & CAMERA ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05080d, 0.08);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);

    // --- RENDERER ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // --- MATERIALS ---
    // 1. Brushed Metallic Silver Armor
    const silverArmorMat = new THREE.MeshStandardMaterial({
      color: 0xdae3ed,
      metalness: 0.92,
      roughness: 0.18,
    });

    // 2. Matte Black Chassis
    const matteBlackMat = new THREE.MeshStandardMaterial({
      color: 0x070a0e,
      metalness: 0.3,
      roughness: 0.8,
    });

    // 3. Glossy Black Visor / Core
    const glossyBlackMat = new THREE.MeshStandardMaterial({
      color: 0x040609,
      metalness: 0.95,
      roughness: 0.05,
    });

    // 4. Electric Blue Emissive (Visor & Core)
    const blueEmissiveMat = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x60a5fa,
      emissiveIntensity: 2.4,
      roughness: 0.2,
    });

    // 5. Red Emissive (Joint Strips & Accents)
    const redEmissiveMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 1.5,
      roughness: 0.3,
    });

    // 6. Champagne Gold Trim
    const champagneMat = new THREE.MeshStandardMaterial({
      color: 0xd4a574,
      metalness: 0.85,
      roughness: 0.25,
    });

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0x0b1728, 1.4);
    scene.add(ambientLight);

    // Electric Blue Key Light (top-left front)
    const blueKeyLight = new THREE.DirectionalLight(0x60a5fa, 3.2);
    blueKeyLight.position.set(-3, 4, 4);
    scene.add(blueKeyLight);

    // Red Rim Light (bottom-right back)
    const redRimLight = new THREE.DirectionalLight(0xef4444, 2.0);
    redRimLight.position.set(3, -2, -2);
    scene.add(redRimLight);

    // Chest Core Point Light
    const corePointLight = new THREE.PointLight(0x60a5fa, 3.5, 6);
    corePointLight.position.set(0, 0.4, 0.8);
    scene.add(corePointLight);

    // Champagne Accent Light
    const champagneLight = new THREE.PointLight(0xd4a574, 1.2, 5);
    champagneLight.position.set(1.5, 2, 2);
    scene.add(champagneLight);

    // --- ROBOT MODEL CONSTRUCTION ---
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // 1. TORSO GROUP
    const torsoGroup = new THREE.Group();
    robotGroup.add(torsoGroup);

    // Chest Armor Base
    const chestGeo = new THREE.BoxGeometry(1.3, 1.1, 0.7);
    const chestMesh = new THREE.Mesh(chestGeo, silverArmorMat);
    chestMesh.position.set(0, 0.3, 0);
    torsoGroup.add(chestMesh);

    // Chest Center Inset Plate (Glossy Black)
    const chestCenterGeo = new THREE.BoxGeometry(0.7, 0.8, 0.73);
    const chestCenterMesh = new THREE.Mesh(chestCenterGeo, glossyBlackMat);
    chestCenterMesh.position.set(0, 0.3, 0.02);
    torsoGroup.add(chestCenterMesh);

    // Electric Blue Reactor Core (Octagonal Reactor)
    const coreGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.1, 8);
    coreGeo.rotateX(Math.PI / 2);
    const coreMesh = new THREE.Mesh(coreGeo, blueEmissiveMat);
    coreMesh.position.set(0, 0.45, 0.38);
    torsoGroup.add(coreMesh);

    // Core Outer Champagne Ring
    const coreRingGeo = new THREE.TorusGeometry(0.26, 0.025, 12, 24);
    const coreRingMesh = new THREE.Mesh(coreRingGeo, champagneMat);
    coreRingMesh.position.set(0, 0.45, 0.39);
    torsoGroup.add(coreRingMesh);

    // Red Mechanical Side Strips
    const redStripGeo = new THREE.BoxGeometry(0.04, 0.6, 0.02);
    const redStripLeft = new THREE.Mesh(redStripGeo, redEmissiveMat);
    redStripLeft.position.set(-0.45, 0.3, 0.37);
    torsoGroup.add(redStripLeft);

    const redStripRight = new THREE.Mesh(redStripGeo, redEmissiveMat);
    redStripRight.position.set(0.45, 0.3, 0.37);
    torsoGroup.add(redStripRight);

    // Abdomen Ribbed Core (Matte Black)
    const abGeo = new THREE.CylinderGeometry(0.45, 0.4, 0.6, 16);
    const abMesh = new THREE.Mesh(abGeo, matteBlackMat);
    abMesh.position.set(0, -0.45, 0);
    torsoGroup.add(abMesh);

    // Abdomen Red Joint Rings
    const abRingGeo = new THREE.TorusGeometry(0.44, 0.015, 8, 24);
    abRingGeo.rotateX(Math.PI / 2);
    const abRing1 = new THREE.Mesh(abRingGeo, redEmissiveMat);
    abRing1.position.set(0, -0.35, 0);
    torsoGroup.add(abRing1);

    const abRing2 = new THREE.Mesh(abRingGeo, redEmissiveMat);
    abRing2.position.set(0, -0.55, 0);
    torsoGroup.add(abRing2);

    // Waist / Pelvis Base
    const pelvisGeo = new THREE.BoxGeometry(0.9, 0.35, 0.6);
    const pelvisMesh = new THREE.Mesh(pelvisGeo, silverArmorMat);
    pelvisMesh.position.set(0, -0.85, 0);
    torsoGroup.add(pelvisMesh);

    // 2. NECK & HEAD GROUP
    const neckGroup = new THREE.Group();
    neckGroup.position.set(0, 0.85, 0);
    torsoGroup.add(neckGroup);

    // Neck Joint Cylinder
    const neckGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.25, 16);
    const neckMesh = new THREE.Mesh(neckGeo, matteBlackMat);
    neckMesh.position.set(0, 0.1, 0);
    neckGroup.add(neckMesh);

    // Neck Red Collar Ring
    const neckCollarGeo = new THREE.TorusGeometry(0.2, 0.02, 12, 24);
    neckCollarGeo.rotateX(Math.PI / 2);
    const neckCollarMesh = new THREE.Mesh(neckCollarGeo, redEmissiveMat);
    neckCollarMesh.position.set(0, 0.08, 0);
    neckGroup.add(neckCollarMesh);

    // Head Group (Rotates towards mouse)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.28, 0);
    neckGroup.add(headGroup);

    // Helmet Base (Angular Metallic Skull)
    const headGeo = new THREE.BoxGeometry(0.65, 0.55, 0.6);
    const headMesh = new THREE.Mesh(headGeo, silverArmorMat);
    headGroup.add(headMesh);

    // Helmet Top Crest (Champagne accent)
    const crestGeo = new THREE.BoxGeometry(0.12, 0.08, 0.55);
    const crestMesh = new THREE.Mesh(crestGeo, champagneMat);
    crestMesh.position.set(0, 0.3, 0.02);
    headGroup.add(crestMesh);

    // Main Visor Shield (Glossy Black)
    const visorGeo = new THREE.BoxGeometry(0.66, 0.2, 0.35);
    const visorMesh = new THREE.Mesh(visorGeo, glossyBlackMat);
    visorMesh.position.set(0, 0.05, 0.15);
    headGroup.add(visorMesh);

    // Electric Blue Visor Strip (Main Sensor Line)
    const visorStripGeo = new THREE.BoxGeometry(0.55, 0.04, 0.02);
    const visorStripMesh = new THREE.Mesh(visorStripGeo, blueEmissiveMat);
    visorStripMesh.position.set(0, 0.05, 0.33);
    headGroup.add(visorStripMesh);

    // Red Side Indicator Dots on Head
    const headDotGeo = new THREE.SphereGeometry(0.025, 8, 8);
    const headDotLeft = new THREE.Mesh(headDotGeo, redEmissiveMat);
    headDotLeft.position.set(-0.34, 0.05, 0.25);
    headGroup.add(headDotLeft);

    const headDotRight = new THREE.Mesh(headDotGeo, redEmissiveMat);
    headDotRight.position.set(0.34, 0.05, 0.25);
    headGroup.add(headDotRight);

    // 3. SHOULDERS & ARMS
    // Left Shoulder
    const leftShoulderGroup = new THREE.Group();
    leftShoulderGroup.position.set(-0.85, 0.7, 0);
    torsoGroup.add(leftShoulderGroup);

    const shoulderPadGeo = new THREE.SphereGeometry(0.35, 16, 16);
    shoulderPadGeo.scale(1.2, 0.8, 1);
    const shoulderPadLeft = new THREE.Mesh(shoulderPadGeo, silverArmorMat);
    leftShoulderGroup.add(shoulderPadLeft);

    const shoulderTrimLeft = new THREE.Mesh(
      new THREE.TorusGeometry(0.36, 0.02, 8, 24),
      blueEmissiveMat
    );
    shoulderTrimLeft.rotation.x = Math.PI / 2;
    leftShoulderGroup.add(shoulderTrimLeft);

    // Left Arm
    const leftArmGeo = new THREE.CylinderGeometry(0.16, 0.14, 0.8, 12);
    const leftArmMesh = new THREE.Mesh(leftArmGeo, matteBlackMat);
    leftArmMesh.position.set(-0.05, -0.45, 0);
    leftShoulderGroup.add(leftArmMesh);

    const leftForearmArmor = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.65, 0.3),
      silverArmorMat
    );
    leftForearmArmor.position.set(-0.05, -0.75, 0.05);
    leftShoulderGroup.add(leftForearmArmor);

    // Right Shoulder
    const rightShoulderGroup = new THREE.Group();
    rightShoulderGroup.position.set(0.85, 0.7, 0);
    torsoGroup.add(rightShoulderGroup);

    const shoulderPadRight = new THREE.Mesh(shoulderPadGeo, silverArmorMat);
    rightShoulderGroup.add(shoulderPadRight);

    const shoulderTrimRight = new THREE.Mesh(
      new THREE.TorusGeometry(0.36, 0.02, 8, 24),
      blueEmissiveMat
    );
    shoulderTrimRight.rotation.x = Math.PI / 2;
    rightShoulderGroup.add(shoulderTrimRight);

    // Right Arm
    const rightArmMesh = new THREE.Mesh(leftArmGeo, matteBlackMat);
    rightArmMesh.position.set(0.05, -0.45, 0);
    rightShoulderGroup.add(rightArmMesh);

    const rightForearmArmor = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.65, 0.3),
      silverArmorMat
    );
    rightForearmArmor.position.set(0.05, -0.75, 0.05);
    rightShoulderGroup.add(rightForearmArmor);

    // 4. CONTACT SHADOW PLANE UNDER FEET / BASE
    const shadowGeo = new THREE.PlaneGeometry(3.5, 3.5);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 120);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
    grad.addColorStop(0.5, 'rgba(7, 21, 37, 0.4)');
    grad.addColorStop(1, 'rgba(5, 8, 13, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -1.8, 0);
    scene.add(shadowMesh);

    // Set initial position of robot
    robotGroup.position.set(0, -0.15, 0);

    // --- ANIMATION LOOP VARS ---
    let animationFrameId;
    let clock = new THREE.Clock();

    // Target rotations for smooth lerping
    let targetHeadX = 0;
    let targetHeadY = 0;
    let targetTorsoY = 0;
    let currentHeadX = 0;
    let currentHeadY = 0;
    let currentTorsoY = 0;

    // --- RENDER & ANIMATE LOOP ---
    const render = () => {
      const time = clock.getElapsedTime();

      // 1. Idle Breathing & Vertical Float
      const floatOffsetY = Math.sin(time * 1.5) * 0.06;
      robotGroup.position.y = -0.15 + floatOffsetY;

      // Subtle shoulder sway
      leftShoulderGroup.rotation.z = Math.sin(time * 1.5) * 0.02;
      rightShoulderGroup.rotation.z = -Math.sin(time * 1.5) * 0.02;

      // 2. Mouse Tracking Lerp
      targetHeadY = (mousePos.current.x * 0.45);
      targetHeadX = (-mousePos.current.y * 0.25);
      targetTorsoY = (mousePos.current.x * 0.2);

      currentHeadX += (targetHeadX - currentHeadX) * 0.05;
      currentHeadY += (targetHeadY - currentHeadY) * 0.05;
      currentTorsoY += (targetTorsoY - currentTorsoY) * 0.05;

      headGroup.rotation.y = currentHeadY + Math.sin(time * 0.8) * 0.025;
      headGroup.rotation.x = currentHeadX;
      torsoGroup.rotation.y = currentTorsoY + Math.sin(time * 1.2) * 0.015;

      // 3. Emissive Pulse Effects
      blueEmissiveMat.emissiveIntensity = 2.2 + Math.sin(time * 2.5) * 0.5;
      redEmissiveMat.emissiveIntensity = 1.3 + Math.sin(time * 1.2) * 0.4;
      corePointLight.intensity = 3.2 + Math.sin(time * 2.5) * 0.8;

      // 4. Scroll Reaction (moves backward, rotates subtly, scales down)
      const scrollFactor = Math.min((scrollY.current || 0) / 600, 1);
      robotGroup.position.z = -scrollFactor * 1.6;
      robotGroup.rotation.y = scrollFactor * 0.25;
      const scaleVal = 1 - scrollFactor * 0.15;
      robotGroup.scale.set(scaleVal, scaleVal, scaleVal);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 550;
      const newH = container.clientHeight || 650;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="robot-3d-canvas-container" />;
};

export default Robot3D;
