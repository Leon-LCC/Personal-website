import {
    Container,
    Heading,
    Text,
    Grid, 
    GridItem, 
    Box, 
    Flex,
    Button,
    HStack,
    VStack,
    useColorModeValue
} from "@chakra-ui/react"

import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { FaUser, FaLaptopCode } from "react-icons/fa";
import { RiQuillPenLine } from "react-icons/ri";


import NextLink from 'next/link';
import Image from 'next/image';

import MotionLayout from "../components/MotionLayout";


const HomePage = () => {
    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current) {
            return;
        }

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
    }, []);


    const ContactInfo = ({ imgSrc, text, herf }) => {
        return (
            <NextLink href={herf} target="_blank">
                <HStack spacing='1'>
                    <Box h={{base: '13pt', md: "16pt", lg: '18pt'}}>
                        <Image src={imgSrc} alt={text} priority={true} sizes="40vh" style={{width: 'auto', height: '100%'}} width={10} height={10}/>
                    </Box>
                    <Text fontSize={{base: "md", md: "xl", lg:"2xl"}} fontWeight={600}>{text}</Text>
                </HStack>
            </NextLink>
        )
    }

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText('llleon');
        } catch (err) {
            console.log('Failed to copy: ', err);
        }
    }
    
    return (
        <MotionLayout>
            <Container centerContent mb='8' mt='16' py='4' px='0' maxWidth={{base: '90%', lg: '80%'}} h='100%' id='home'>
                <Box id='welcome-avatar' justifyContent={{base: 'center', md: 'right'}} alignItems='center' display='flex' h='50%' w={{base: '100%', md:'50%', lg: '65%'}} zIndex='0'></Box>
                <Box justifyContent='center' alignItems='center' display='flex' flexDirection='column' h='50%' w={{base:'100%', md:'60%'}} mt={{base: '-210pt', sm:'-220pt', lg:'-230pt'}} ml={{base: '0', md:'60', lg: '80'}} zIndex='1' bgGradient={{base:useColorModeValue("linear(to-t, #FFFFFF, transparent)", "linear(to-t, #262626, transparent)"), md:'none'}}>
                    <Box display={{base: 'block', md: 'none'}} h='10%' w='100%' p='1'> </Box>
                    <Text fontSize={{ md: "lg", lg: "xl"}}  display={{base: 'none', md: 'block'}} align='center'>Hey there!</Text>
                    <NextLink href='https://drive.google.com/uc?id=1jm8_Q5teuUOlfwiCw5ey_1cYacnW-2s4&export=download' target="_blank">
                        <Heading fontSize={{base: "4xl", sm: "5xl", lg: "6xl"}} fontWeight='bold' align='center' textShadow={useColorModeValue("3px 3px #EFEBE7", "3px 3px #7E7E7E")}>I'm Leon Cheng</Heading>
                    </NextLink>                    
                    <Text fontSize={{ md: "xl", lg: "2xl"}}  align='center'> Student @ NTU GINM | CSIE </Text>
                    
                    <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap={4} w='100%' mt='4' p='3' mb='-2'>
                        <GridItem rowSpan={1} colSpan={3} justifyContent='Center' alignItems='Center' display='flex'>
                            <Text fontSize={{ md: "xl", lg: "2xl"}}  align='center'> Learn more about me through my...</Text>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1} justifyContent='Right' alignItems='Center' display='flex'>
                            <NextLink href='/profile'>
                                <Button leftIcon={<FaUser />} w='100%' display='flex' variant='solid3' size={{base:'md', lg:'lg'}} fontSize={{ base: "xl", lg: "2xl"}}>
                                    <Text py='20pt'>Profile</Text> 
                                </Button>
                            </NextLink>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1} justifyContent='Center' alignItems='Center' display='flex'>
                            <NextLink href='/work'>
                                <Button leftIcon={<FaLaptopCode />} w='100%' display='flex' variant='solid3' size={{base:'md', lg:'lg'}} fontSize={{ base: "xl", lg: "2xl"}} pt='1'> 
                                    <Text mx='2pt' py='20pt'>Work</Text>
                                </Button>
                            </NextLink>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1} justifyContent='Left' alignItems='Center' display='flex'>
                            <NextLink href='/post'>
                                <Button leftIcon={<RiQuillPenLine/>} w='100%' display='flex' variant='solid3' size={{base:'md', lg:'lg'}} fontSize={{ base: "xl", lg: "2xl"}} pt='1'>
                                    <Text py='20pt'>Post</Text>
                                </Button>
                            </NextLink>
                        </GridItem>
                    </Grid>
                </Box>
                <Box alignItems='center' display='flex' flexDirection='column' h='100%' w='112%' pt='32' mt='-45pt' bg={useColorModeValue("#F7F4F2", "#262626")}>
                    <Box h='10%' w='85%' p='1' mt='-10' mb='14' bg={useColorModeValue("#665143", "#868686")}> </Box>
                    <Text fontSize={{base: "xl", md:"2xl", lg: "3xl"}} fontWeight='bold' align='center'>Contact Me &#128518;</Text>
                    <Flex flexWrap="wrap" flexDirection='row' gap={{base: '3', sm: '5', lg: '8'}} alignItems='center' justifyContent='center' mx='10' mb='5' p='5' pt='5'borderRadius='lg'>
                        <ContactInfo text='Gmail' herf='mailto:lc.cheng00@gmail.com' imgSrc='/Images/Icons/gmail.png'/>
                        <ContactInfo text='Linkedin' herf='https://www.linkedin.com/in/li-chen-cheng/' imgSrc='/Images/Icons/linkedin.png'/>
                        <ContactInfo text='Github' herf='https://github.com/Leon-LCC' imgSrc={useColorModeValue('/Images/Icons/github.png', '/Images/Icons/github-white.png')}/>
                        <ContactInfo text='Twitter' herf='https://twitter.com/LeonLCC_' imgSrc='/Images/Icons/twitter.png'/>                        
                        <Button onClick={() => {copyToClipboard()}} variant='solid3' size='xxs'>
                            <HStack spacing='1'>
                                <Box h={{base: '13pt', md: "16pt", lg: '18pt'}}>
                                    <Image src={'/Images/Icons/discord.png'} alt={'Discord'} priority={true} sizes="40vh" style={{width: 'auto', height: '100%'}} width={10} height={10}/>
                                </Box>
                                <Text fontSize={{base: "md", md: "xl", lg:"2xl"}} fontWeight={600}>Discord</Text>
                            </HStack>
                        </Button>
                    </Flex>
                </Box>
            </Container>
        </MotionLayout>
    )
}


export default HomePage