import {
    Container,
    Heading,
    Text,
    Grid, 
    GridItem, 
    Box, 
    Button, 
    Link
} from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"
import ProfileSection from "../components/Profile"
import Layout from "../components/Layout"

import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FaUser } from "react-icons/fa";
import { RiQuillPenLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";




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
            renderer.setSize(window.innerWidth, window.innerHeight/2);
            document.getElementById('welcome-avatar').appendChild(renderer.domElement);
            
            // Camera setup
            camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight / 0.5, 1, 100);
            camera.position.set(0, 1, 4.5);

            
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
                camera.aspect = window.innerWidth / window.innerHeight / 0.5;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight/2);
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
        }
    }, []);

    
    return (
        <Layout>
            <Container centerContent mb='40' mt='20' py='4' px='0' maxWidth={{base: '90%', lg: '80%'}}>
                <Box id='welcome-avatar' justifyContent={{base: 'center', md: 'right'}} alignItems='center' display='flex' h='50%' w={{base: '100%', md:'50%', lg: '65%'}} zIndex='0'></Box>
                <Box justifyContent='center' alignItems='center' display='flex' flexDirection='column' h='50%' w={{base:'100%', md:'60%'}} mt={{base: '-210pt', sm:'-220pt', lg:'-80'}} ml={{base: '0', md:'60', lg: '80'}} zIndex='1' bgGradient={{base:useColorModeValue("linear(to-t, #FFFFFF, transparent)", "linear(to-t, #262626, transparent)"), md:'none'}}>
                    <Box display={{base: 'block', md: 'none'}} h='10%' w='100%' p='1'> </Box>
                    <Text fontSize={{ md: "lg", lg: "xl"}}  display={{base: 'none', md: 'block'}} align='center'>Hey there!</Text>
                    <Heading fontSize={{base: "4xl", sm: "5xl", lg: "6xl"}} fontWeight='bold' align='center' textShadow='3px 3px #EFEBE7'>I'm Leon Cheng</Heading>
                    <Text fontSize={{ md: "xl", lg: "2xl"}}  align='center'> Student @ NTU GINM | CSIE</Text>
                    <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap={4} w='100%' mt='4' p='3' mb='-2'>
                        <GridItem rowSpan={1} colSpan={3} justifyContent='Center' alignItems='Center' display='flex'>
                            <Text fontSize={{ md: "xl", lg: "2xl"}}  align='center'> Learn more about me through my...</Text>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1} justifyContent='Right' alignItems='Center' display='flex'>
                            <Link href='/#profile'>
                                <Button leftIcon={<FaUser />} w='100%' display='flex' variant='solid3' size={{base:'md', lg:'lg'}} fontSize={{ base: "xl", lg: "2xl"}}>
                                    <Text my='20pt'>Profile</Text> 
                                </Button>
                            </Link>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1} justifyContent='Center' alignItems='Center' display='flex'>
                            <Link href='/work'>
                                <Button leftIcon={<FaLaptopCode />} w='100%' display='flex' variant='solid3' size={{base:'md', lg:'lg'}} fontSize={{ base: "xl", lg: "2xl"}} pt='1'> 
                                    <Text mx='2pt' my='20pt'>Work</Text>
                                </Button>
                            </Link>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1} justifyContent='Left' alignItems='Center' display='flex'>
                            <Link href='/post'>
                                <Button leftIcon={<RiQuillPenLine/>} w='100%' display='flex' variant='solid3' size={{base:'md', lg:'lg'}} fontSize={{ base: "xl", lg: "2xl"}} pt='1'>
                                    <Text my='20pt'>Post</Text>
                                </Button>
                            </Link>
                        </GridItem>
                    </Grid>
                </Box>
                <Box alignItems='center' display='flex' flexDirection='column' h='100%' w='112%' p={{base:'20', md:'20'}} mt='-14' bg={useColorModeValue("#F7F4F2", "#262626")}>
                </Box>
                
            </Container>
            <ProfileSection />
        </Layout>
    )
}


export default HomePage