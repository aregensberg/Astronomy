import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass'
import { ConvolutionShader } from 'three/examples/jsm/shaders/ConvolutionShader'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'


function Stars () {
  const mount = React.useRef(null)
  const threeJsNonsense = () =>  {

    //SCENE, CAMERA, RENDERER
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 50, 1000 );
    camera.position.z = 5
    var renderer = new THREE.WebGLRenderer({ antialias: true});

    renderer.setSize( mount.current.clientWidth, 500);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    mount.current.appendChild( renderer.domElement );


    // console.log(mount)

    //TEXTURES
    var starTexture1 = new THREE.TextureLoader().load("../public/bluestar.png")
    var material1 = new THREE.MeshBasicMaterial({ texture: starTexture1 })
    var starTexture2 = new THREE.TextureLoader().load("../public/dyingstar.png")
    var material2 = new THREE.MeshBasicMaterial({ texture: starTexture2 })

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

    var geometry2 = new THREE.SphereGeometry( 10, 10, 10 );
    var material3 = new THREE.MeshBasicMaterial( { color: 0x00ffff } )
    var planet1 = new THREE.Mesh( geometry2, material3 )
    planet1.position.x = -40
    planet1.position.y = -10
    planet1.position.z = -100
    scene.add( planet1 );

    var geometry3 = new THREE.RingGeometry( 15, 20, 32 );
    var material4 = new THREE.MeshBasicMaterial( { color: 0x940000, side: THREE.DoubleSide } )
    var ring1 = new THREE.Mesh( geometry3, material4 )
    ring1.position.x = -40
    ring1.position.y = -10
    ring1.position.z = -100
    scene.add( ring1 );

    var geometry4 = new THREE.SphereGeometry( 10, 10, 10 );
    var material5 = new THREE.MeshBasicMaterial( { color: 0xFF9933 } )
    var planet2 = new THREE.Mesh( geometry4, material5 )
    planet2.position.x = 190
    planet2.position.y = 100
    planet2.position.z = -200
    scene.add( planet2 );

    var geometry5 = new THREE.RingGeometry( 15, 20, 32 );
    var material6 = new THREE.MeshBasicMaterial( { color: 0x36E2B6, side: THREE.DoubleSide } )
    var ring2 = new THREE.Mesh( geometry5, material6 )
    ring2.position.x = 190
    ring2.position.y = 100
    ring2.position.z = -200
    scene.add( ring2 );

    var geometry6 = new THREE.SphereGeometry( 10, 10, 10 );
    var material7 = new THREE.MeshBasicMaterial( { color: 0xDD4B75 } )
    var planet3 = new THREE.Mesh( geometry6, material7 )
    planet3.position.x = -280
    planet3.position.y = 100
    planet3.position.z = -300
    scene.add( planet3 );

    var geometry7 = new THREE.RingGeometry( 15, 20, 32 );
    var material8 = new THREE.MeshBasicMaterial( { color: 0x4BDDB3, side: THREE.DoubleSide } )
    var ring3 = new THREE.Mesh( geometry7, material8 )
    ring3.position.x = -280
    ring3.position.y = 100
    ring3.position.z = -300
    scene.add( ring3 );

    var geometry8 = new THREE.SphereGeometry( 10, 10, 10 );
    var material9 = new THREE.MeshBasicMaterial( { color: 0x234099 } )
    var planet4 = new THREE.Mesh( geometry8, material9 )
    planet4.position.x = 110
    planet4.position.y = -100
    planet4.position.z = -200
    scene.add( planet4 );

    var geometry9 = new THREE.RingGeometry( 15, 20, 32 );
    var material10 = new THREE.MeshBasicMaterial( { color: 0x7D9E2C, side: THREE.DoubleSide } )
    var ring4 = new THREE.Mesh( geometry9, material10 )
    ring4.position.x = 110
    ring4.position.y = -100
    ring4.position.z = -200
    scene.add( ring4 );

    var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
    scene.add( ambientLight );

    var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
    camera.add( pointLight );
    scene.add( camera );

    var animate = function () {
      requestAnimationFrame( animate );
      planet1.rotation.x += 0.01;
      planet1.rotation.y += 0.01;
      ring1.rotation.x += 0.015;
      ring1.rotation.y += 0.01;
      planet2.rotation.x += 0.01;
      planet2.rotation.y += 0.01;
      ring2.rotation.x += 0.015;
      ring2.rotation.y += 0.005;
      planet3.rotation.x += 0.01;
      planet3.rotation.y += 0.01;
      ring3.rotation.x += 0.02;
      ring3.rotation.y += 0.02;
      planet4.rotation.x += 0.01;
      planet4.rotation.y += 0.01;
      ring4.rotation.x += 0.015;
      ring4.rotation.y += 0.02;
      renderer.render( scene, camera );
    };
    animate();

  }
  React.useEffect(threeJsNonsense, [mount.current])

    return(
      <>
        <div ref = {mount} />

        </>
    )
}

export default Stars