// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// // const geometry = new THREE.BoxGeometry(1, 1, 1);
// // const geometry = new THREE.SphereGeometry(1, 10, 10);
// // const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
// // const geometry = new THREE.TorusKnotGeometry(0.7, 0.2, 100, 16);
// const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 20, 10);

// // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, side: THREE.DoubleSide });
// const material = new THREE.MeshBasicMaterial({ color: "pink"});

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 2;

// const canvas = document.querySelector('canvas');
// const renderer = new THREE.WebGLRenderer({ canvas: canvas });
// renderer.setSize(window.innerWidth, window.innerHeight);

// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// })

// const controls = new OrbitControls( camera, renderer.domElement );
// controls.enableDamping = true;
// controls.autoRotate = true;
// controls.dampingFactor = 0.01;

// function animate() {
//   requestAnimationFrame(animate);
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;

//   controls.update();

//   renderer.render(scene, camera);
// }

// animate();

/**3D model */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(1, 0, 3);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;
// document.body.appendChild(renderer.domElement);

const rgbeLoader = new HDRLoader();
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/zwartkops_pit_4k.hdr', function (texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  scene.background = texture;
});

const loader = new GLTFLoader();

loader.load('src/wooden_box.glb', function (gltf) {
  gltf.scene.position.y = -1,
  scene.add(gltf.scene);
})

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();