// import * as THREE from 'three';
// import Section from '../reusableComponents/sectionsAndElements/Section';
// import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
// import { useRef, useEffect } from 'react';

// export default function GameThreeJS() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Scene
//     const scene = new THREE.Scene();
//     // Orthographic camera
//     const aspect = window.innerWidth / window.innerHeight;
//     const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 100);
//     camera.position.set(0, 0, 10);
//     camera.lookAt(0, 0, 0);
//     // Renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Player
//     const playerGeometry = new THREE.PlaneGeometry(1, 1);
//     const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const player = new THREE.Mesh(playerGeometry, playerMaterial);
//     player.position.set(0, -0.5, 0);
//     scene.add(player);

//     // Example function to add an obstacle
//     const addObstacle = () => {
//       const obstacleGeometry = new THREE.PlaneGeometry(0.2, Math.random() * 0.5 + 0.1);
//       const obstacleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//       const obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
//       obstacle.position.set(Math.random() * 2 - 1, 0.5, 0);
//       scene.add(obstacle);
//     };

//     // Resize listener
//     const onWindowResize = () => {
//       const aspect = window.innerWidth / window.innerHeight;
//       camera.left = -aspect;
//       camera.right = aspect;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', onWindowResize, false);

//     // Render loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       // mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <Section>
//       <SmallScreenSection xlHidden={false}>
//         <div ref={mountRef}></div>
//       </SmallScreenSection>
//     </Section>
//   );
// }
