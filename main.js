//importing three js module using cdn
import * as THREE from 'three';

//initialize the scene
const scene = new THREE.Scene();

////add objects to the scene

//creating geometry, material for the mesh
const cubeGeometry  = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color:"blue"})

//creating mesh using geometry,material
const cubeMesh = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial
)

//mesh added to the scene in a parent-children relationship
scene.add(cubeMesh);



//initialize the camera (Field of View, aspect ratio, near, far)
const camera = new THREE.PerspectiveCamera( 50,
     window.innerWidth / window.innerHeight,
     0.1, 30);

//camera is positioned this units away
camera.position.z = 5;

scene.add(camera);


////initialize the renderer

//referencing the threejs canvas defined in html
const canvas = document.querySelector('canvas.threejs');

//creating a renderer which takes parameter as canvas
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
});

//setting the renderer size to the window size
renderer.setSize( window.innerWidth, window.innerHeight );

//running the renderer
renderer.render(scene,camera);