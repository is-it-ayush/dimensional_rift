import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls";
import { hexRgb, generateRandomColor, ColorLuminance } from './helper_script.js';
import { ShaderPass } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/postprocessing/ShaderPass.js';
import { RenderPass } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/postprocessing/EffectComposer.js";
import dotscreen_vertex from '../shaders/dotscreen/vertex.js';
import dotscreen_fragment from '../shaders/dotscreen/fragment.js';

import bg_vertex from '../shaders/bg/vertex.js';
import bg_fragment from '../shaders/bg/fragment.js';

let camera, scene, renderer, mesh, controls, mesh_geometry, mesh_material, clock, color, color_RGB;

//Post Processing Variables
let composer, renderPass, shaderPass;



function init() {

    // Code Status
    console.log("[Three] Intializing Three!");
    
    // Setting Up Camera.
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.setZ(1);

    // Creating a new Scene.
    scene = new THREE.Scene();

    // Creating a new renderer.
    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);

    // Three.js Clock for Update.
    clock = new THREE.Clock();

    // Setting up Orbit Controls.
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.minDistance = 0;
    controls.maxDistance = 1;

    // Add the background to the scene.
    addBackground();

    // Intializes the Post Processing.
    post_process();

}

//Adds a sphere which acts as a background from the inside (Three.BackSide) to the scene.
function addBackground() {

    let bg_geo = new THREE.SphereGeometry(2, 32, 16);
    mesh_material = new THREE.ShaderMaterial({
        vertexShader: bg_vertex,
        fragmentShader: bg_fragment,
        uniforms: {
            uTime: { value: 0.0 },
            uColor1: { value: [255, 0, 0] },
            uColor2: { value: [0, 0, 0] },
            uColorAccent: { value: [0, 0, 0] },
        }
    })

    let bg_mesh = new THREE.Mesh(bg_geo, mesh_material)
    bg_mesh.material.side = THREE.BackSide;

    scene.add(bg_mesh)
    
    // Code Status
    console.log("[Three] Background Added!");
}

// Function Adds a Matte (DotScrenShader) Filter to the to the renderer with the help of effect composer.
function post_process() {

    // Intialize Effect Composer & Render Pass.
    composer = new EffectComposer(renderer)
    renderPass = new RenderPass(scene, camera)

    // Intialize DotScreenShader with custom Properties to match the Matte Finish.
    // Instead of using original DotScreenShader. This one has custom shader (vertex) which uses Common Perlin Noise to duplicate matte effect to screen.
    const DotScreenShader = {
        uniforms: {
            tDiffuse: { value: null },
            tSize: { value: new THREE.Vector2(64, 64) },
            center: { value: new THREE.Vector2(0.5, 0.5) },
            angle: { value: 1.57 },
            scale: { value: 1 },
        },
        vertexShader: dotscreen_vertex,
        fragmentShader: dotscreen_fragment,
    }

    //Pass the initialized DotScreenShader to ShaderPass.
    shaderPass = new ShaderPass(DotScreenShader)

    //Add Both RenderPass and ShaderPass to Composer.
    composer.addPass(renderPass)
    composer.addPass(shaderPass)

    // Code Status
    console.log("[Three] Post Processing Complete!");
}

// Looped Function which re-iterates constantly.
function animate() {

    // Update's the Background by using Clock from Threejs by 50% reduced time.
    mesh_material.uniforms.uTime.value += clock.getDelta() * 0.5;

    requestAnimationFrame(animate);

    // Check Size of the viewport and update accordingly.
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    // Update Orbit Controls.
    controls.update();
    
    // Update Projection Matrix. Its basically a matrix which holds the values of how the content is projected on User Screen.
    camera.updateProjectionMatrix()

    // Render the scene.
    renderer.render(scene, camera);

    //Render the composer with the added effect.
    composer.render();

}

// Function which initializes the entire script.
export function initThree() {
    init();
    animate();
}

export default initThree;