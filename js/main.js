const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth,  window.innerHeight);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,  window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})


// Add the canavs to be rendered on
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls( camera, renderer.domElement );

//Create the Cube
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// Material on the box
const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: false });

const cube = new THREE.Mesh(boxGeometry, material);
scene.add(cube);

//Change Camera position
camera.position.z = 4;

//Handles updates to the scene
var update = function() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

}

// Anything you want to be drawn on the scene/ Draw scene
var render = function() {

    renderer.render(scene, camera);

}

// This is a game loop for refreshing the frame/ Run game loop (update, render, repeat)
var loop = function() {
    requestAnimationFrame(loop);
    update();
    render();
}

loop();