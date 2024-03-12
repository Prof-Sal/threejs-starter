var width = window.innerWidth;
var height = window.innerHeight;


// 1: Set up the scene

var scene = new THREE.Scene();

// 2: Add a camera
var camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
camera.position.z = 8;
camera.position.y = 3;
camera.rotation.x = -0.1;
// camera.rotation.x= -0.05;



// 3: create a renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// 4: Add objects to the scene
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0x0000ff});
var cube = new THREE.Mesh(geometry,material);
scene.add(cube);

cube.position.set(0,2,-2);
// cube.position.y = 2;
// cube.position.z = -2;

cube.scale.x = 2;

const geometry1 = new THREE.TorusGeometry( 12, 3, 4, 100 ); 
const material1 = new THREE.MeshLambertMaterial( { color: 0xffff00 } ); 
const torus = new THREE.Mesh( geometry1, material1 );
scene.add(torus);
// change scale of torus
torus.scale.x = 0.2;
torus.scale.y = 0.2;
torus.scale.z = 0.2;

torus.position.y = 2;
torus.position.z = -2;

// Add plane
const geometryPlane = new THREE.PlaneGeometry( 1, 1 );
const materialPlane = new THREE.MeshLambertMaterial( {color: "#61baff", side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometryPlane, materialPlane);
scene.add( plane );

plane.rotation.x = THREE.MathUtils.degToRad(90);

plane.scale.x = 30;
plane.scale.y = 30;

// Add torus knot
const geometryKnot = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ); 
const materialKnot = new THREE.MeshLambertMaterial( { color: "#ff3363" } ); 
const torusKnot = new THREE.Mesh( geometryKnot, materialKnot ); 
scene.add(torusKnot);

torusKnot.position.x = 8;
torusKnot.position.y = 5;
torusKnot.position.z = -10;

torusKnot.scale.x = 0.1;
torusKnot.scale.y = 0.1;
torusKnot.scale.z = 0.1;

// Add grid helper
var size = 20;
var divisions = 20;
var gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );


// 5: Add lighting to the scene
var light = new THREE.PointLight(0xFFFFF,1,200)
light.position.set(10,10,10);
scene.add(light);


// 5: Render the scene
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    torus.rotation.x -= 0.005;
    torus.rotation.y += 0.005;

    torusKnot.rotation.x -= 0.05;
    torusKnot.position.y = Math.sin(Date.now() * 0.002) * 2 + 8;

    renderer.render(scene,camera);
}

animate();



