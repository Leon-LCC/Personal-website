import {
    Container,
    Flex,
    Heading,
    Text,
    Grid, GridItem, Box,
} from "@chakra-ui/react"
import ProfileSection from "../components/Profile"
import Layout from "../components/Layout"

import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const HomePage = ({}) => {
    const isInitialized = useRef(false);

    useEffect(() => {
        if (!isInitialized.current) {
            let scene, renderer, camera, mixer;
            const allActions = [];

            // Scene setup
            scene = new THREE.Scene();
            
            const ambientLight = new THREE.AmbientLight(0xffffff, 3);
            scene.add(ambientLight);
            
            // Renderer setup
            renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true});
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth/2, window.innerHeight/2);
            document.getElementById('welcome-avatar').appendChild(renderer.domElement);
            
            // Camera setup
            camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 100);
            camera.position.set(0, 1.6, 4.5);
            
            // Orbit controls
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enablePan = false;
            controls.enableZoom = false;
            controls.target.set(0, 1, 0);
            controls.update();
            
            // GLTFLoader to load the model
            const loader = new GLTFLoader();
            loader.load('Models/avatar.glb', (gltf) => {
                const model = gltf.scene;
                scene.add(model);
                model.position.set(0, 0, 0);
                
                // Play initial animation
                mixer = new THREE.AnimationMixer(model);
                for (let i = 0; i < gltf.animations.length; i++) {
                    const action = mixer.clipAction(gltf.animations[i]);
                    action.enabled = true;
                    action.setEffectiveTimeScale(1);
                    action.setEffectiveWeight(i === 1 ? 1 : 0);
                    action.play();
                    allActions.push(action);
                }
                
                // Click event listener to toggle animation, Randomly fade to animation 0 or 2, Play animation once, Fade to animation 1
                renderer.domElement.addEventListener('click', () => {
                    //Return if the animation is already running
                    if (allActions[0].getEffectiveWeight() > 0 || allActions[2].getEffectiveWeight() > 0) { return; }
                    const nextAnimation = Math.floor(Math.random() * 2) * 2;
                    console.log(nextAnimation);
                    allActions[nextAnimation].reset();
                    allActions[nextAnimation].enabled = true;
                    allActions[nextAnimation].setEffectiveWeight(1);
                    allActions[nextAnimation].setLoop(THREE.LoopOnce, 1);
                    allActions[nextAnimation].clampWhenFinished = true;
                    allActions[1].crossFadeTo(allActions[nextAnimation], 2);
                    
                    mixer.addEventListener('finished', function onFinished(e) {
                        allActions[1].enabled = true;
                        allActions[1].setEffectiveWeight(1);
                        allActions[1].crossFadeFrom(allActions[nextAnimation], 3);
                        mixer.removeEventListener('finished', onFinished);
                    });
                });
            });
            
            // Resize handling
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
            window.addEventListener('resize', onWindowResize);

            let prevTime = performance.now();
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                
                const currTime = performance.now();
                const delta = (currTime - prevTime) / 1000; // Convert milliseconds to seconds
                prevTime = currTime;

                if (mixer) {
                    mixer.update(delta);
                }
                
                renderer.render(scene, camera);
            }
            animate();
            
            // Update initialization status
            isInitialized.current = true;
            
            // Clean-up function
            return () => {
                window.removeEventListener('resize', onWindowResize);
                // Dispose resources if needed
            };
        }
    }, []);

    
    return (
        <Layout>
            <Container centerContent mb='40' mt='20' py='4' px='0' maxWidth={{base: '90%', lg: '80%'}}>
                <Grid templateRows='repeat(6, 1fr)' templateColumns='repeat(3, 1fr)' gap={0} w='100%' h='100%' bg='#F7F4F2' borderRadius='lg' boxShadow='lg'>
                    <GridItem rowSpan={4} colSpan={3}  justifyContent='Center' alignItems='Center' display='flex' h='100%'>
                        <Box id='welcome-avatar' justifyContent='Center' alignItems='Center' display='flex' />
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={3} justifyContent='Center' alignItems='Top' display='flex'>
                        <Box>
                            <Heading fontSize={{base: "3xl", md: "4xl", lg: "5xl"}} fontWeight='bold' align='center' pb='1'>Leon Cheng</Heading>
                            <Text fontSize={{ md: "xl", lg: "2xl"}}  align='center'> You can learn more about me through...</Text>
                        </Box>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} justifyContent='Center' alignItems='Center' display='flex'>
                        Profile
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} justifyContent='Center' alignItems='Center' display='flex'>
                        Work
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} justifyContent='Center' alignItems='Center' display='flex'>
                        Post
                    </GridItem>
                </Grid>
            </Container>
            <ProfileSection />
        </Layout>
    )
}


export default HomePage