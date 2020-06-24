import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass'
import { ConvolutionShader } from 'three/examples/jsm/shaders/ConvolutionShader'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'


class Stars extends React.Component {
  componentDidMount () {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 100
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );

    var starTexture1 = new THREE.TextureLoader().load("./bluestar.png")
    var starTexture2 = new THREE.TextureLoader().load("./dyingstar.png")

    var geometry = new THREE.SphereGeometry(5, 5, 5)

    for (var i = 0; i < 250; i++) {
      var mesh = new THREE.Mesh(geometry, material1)
      mesh.position.x = (Math.random() - 0.5) * 2000
      mesh.position.y = (Math.random() - 0.5) * 2000
      mesh.position.z = (Math.random() - 0.5) * 2000
      scene.add(mesh)
    }

    for (var i = 0; i < 250; i++) {
      var mesh = new THREE.Mesh(geometry, material2)
      mesh.position.x = (Math.random() - 0.5) * 2000
      mesh.position.y = (Math.random() - 0.5) * 2000
      mesh.position.z = (Math.random() - 0.5) * 2000
      scene.add(mesh)
    }

    var material1 = new THREE.MeshBasicMaterial({ color: 0x000000 })
    var material2 = new THREE.MeshBasicMaterial({ map: starTexture2 })

    // var cube = new THREE.Mesh( geometry, material1 );
    scene.add( geometry );
    var animate = function () {
      requestAnimationFrame( animate );
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();

//     var renderer,
//       scene,
//       camera,
//     //   myCanvas = document.getElementById('myCanvas')
//     // console.log(myCanvas)
//
// //RENDERER
//     renderer = new THREE.WebGLRenderer({
//       canvas: myCanvas,
//       antialias: true
//     });
//     renderer.setClearColor(0x000000)
//     renderer.setPixelRatio(window.devicePixelRatio)
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     this.mount.appendChild(renderer.domElement)
//
// //CAMERA
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     camera.position.z = 10
//
// // CONTROLS
//   var controls = new OrbitControls(camera, renderer.domElement)
//
// //TEXTURES
//     var starTexture1 = new THREE.TextureLoader().load("bluestar.png")
//     var starTexture2 = new THREE.TextureLoader().load("dyingstar.png")
//
// //SCENE
//     scene = new THREE.Scene()
//
//     // var material = new THREE.MeshLambertMaterial()
//
//     var geometry = new THREE.SphereGeometry(5, 5, 5)
//     var material1 = new THREE.MeshBasicMaterial({ map: starTexture1 })
//     var material2 = new THREE.MeshBasicMaterial({ map: starTexture2 })
//
//     for (var i = 0; i < 250; i++) {
//       var mesh = new THREE.Mesh(geometry, material1)
//       mesh.position.x = (Math.random() - 0.5) * 2000
//       mesh.position.y = (Math.random() - 0.5) * 2000
//       mesh.position.z = (Math.random() - 0.5) * 2000
//       scene.add(mesh)
//     }
//
//     for (var i = 0; i < 250; i++) {
//       var mesh = new THREE.Mesh(geometry, material2)
//       mesh.position.x = (Math.random() - 0.5) * 2000
//       mesh.position.y = (Math.random() - 0.5) * 2000
//       mesh.position.z = (Math.random() - 0.5) * 2000
//       scene.add(mesh)
//     }
//
// //LIGHTS
//     var light = new THREE.AmbientLight(0xffffff, 0.5)
//     scene.add(light)
//
//     var light2 = new THREE.PointLight(0xffffff, 0.5)
//     scene.add(light2)
//
// //COMPOSER
//
//     renderer.autoClear = false
//     var composer = new EffectComposer(renderer)
//     var starRenderModel = new RenderPass(scene, camera)
//     var effectBloom = new BloomPass(2, 25, 5)
//     // var sceneRenderModel = new RenderPass(scene, camera)
//     var effectCopy = new ShaderPass(CopyShader)
//     effectCopy.renderToScreen = true
//     composer.addPass(starRenderModel)
//     composer.addPass(effectBloom)
//     composer.addPass(effectCopy)
//     render()
//
// // var delta = 0
//
//     function render () {
//
//       // delta += 0.1
//       // customPass.uniforms.amount.value = Math.sin(delta)
//
//       // renderer.render(scene, camera)
//       composer.render()
//
//       requestAnimationFrame(render)
//     }
  }
  render() {
    return(
      <>
        <div ref = {ref => this.mount = ref} />

        </>
    )
  }
}

export default Stars