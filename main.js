//importing three js module using cdn
import * as THREE from 'three';

//importing OrbitControls (addon)
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//initialize the scene
const scene = new THREE.Scene()

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
scene.add(cubeMesh)



// //initialize the camera (Field of View, aspect ratio, near, far)
// const camera = new THREE.PerspectiveCamera( 50,
//      window.innerWidth / window.innerHeight,
//      0.1, 30)

//setting the aspect ratio so that the object does not stretches itself
const aspectRatio = window.innerWidth / innerHeight

//setting Orthographic camera (left, right, top, bottom, near, far)
const camera = new THREE.OrthographicCamera (
    -1 * aspectRatio,
    1 * aspectRatio,
    1,
    -1,
    0.1,
    200
)

//camera is positioned this units away
camera.position.z = 5

scene.add(camera)


////initialize the renderer

//referencing the threejs canvas defined in html
const canvas = document.querySelector('canvas.threejs')

//creating a renderer which takes parameter as canvas
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

//setting the renderer size to the window size
renderer.setSize( window.innerWidth, window.innerHeight )

//instantiate the controls (takes camera and dom selector as the parameters)
const controls = new OrbitControls(camera,canvas)

//for smooth rotation and maintained figure
controls.enableDamping = true
controls.autoRotate = true

//normal rendering only takes a frame and render while if we want to make it 3D, we need to use the concept of render loop
const renderloop = () => {
    //updates the control accordingly
    controls.update()
    //running the renderer after it is updated
    renderer.render(scene,camera)
    //requestAnimationFrame allows renderloop only when it is required (unlike infinite loop)
    window.requestAnimationFrame(renderloop)
}

renderloop()

