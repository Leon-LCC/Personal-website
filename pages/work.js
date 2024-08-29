import { 
    Container, 
    Flex, 
    Box,
    Text,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react";

import WorkItem from "../components/WorkItem";
import MotionLayout from "../components/MotionLayout";



const WorkSection = () => {
    return (
            <Container centerContent maxWidth={{base: '100%', lg: '90%'}} pt='16' mb='20' id='work'>
            <MotionLayout>
                <Box w='100%' align='center'>
                    <Box align='center' bg={useColorModeValue("#775E4E", "#D9D9D9")} borderRadius='lg' p='4' pb='8' px='6' mb='-6' w='fit-content' position={'relative'} boxShadow='lg'></Box>
                    <Box w='90%' align='center' bg={useColorModeValue("#F7F4F2", "#262626")} borderRadius='2xl' pt='10' pb='12' mb='14' px='8'> 
                        <Heading size="2xl" align='center' mb='4'>Work</Heading>
                        <Text fontSize={{base:"sm", sm:'md', md: "lg", lg: "xl"}} align='center'> 
                            Here are some of my projects. &#x1F60E; <br />
                            Click on the cards to learn more about them! &#128209; <br />
                            Also, feel free to contact me if you have any questions&#129300;/ feedbacks &#128172;/ opportunities! &#129309;
                        </Text>
                    </Box>
                </Box>
                <Flex flexWrap="wrap" w="100%">
                    <Box width={{ base: '100%', xl: '50%' }} p='2'>
                        <WorkItem
                            name="personal-site"
                            title="My Portfolio" 
                            imageSrc="/Images/mysite.jpg"
                            description="A personal website built with React, Next.js, and Chakra UI. Some cool animations are also added with Framer Motion and Three.js."
                        />
                    </Box>
                    <Box width={{ base: '100%', xl: '50%' }} p='2'>
                        <WorkItem
                            name="frame-interpolation"
                            title="Video Frame Interpolation"
                            imageSrc="/Images/interpolation.jpg"
                            description="A video frame interpolation project implemented in Python."
                        />
                    </Box>
                    <Box width={{ base: '100%', xl: '50%' }} p='2'>
                        <WorkItem
                            name="3dcv-algo-imp"
                            title="3DCV Algorithms Implementation"
                            imageSrc="/Images/3dcv.jpg"
                            description="Some 3D Computer Vision algorithms implemented in Python, such as Stereo Matching and Visual Odometry."
                        />
                    </Box>
                    <Box width={{ base: '100%', xl: '50%' }} p='2'>
                        <WorkItem
                            name="2dcv-algo-imp"
                            title="2DCV Algorithms Implementation"
                            imageSrc="/Images/Lenna.png"
                            description="Classic 2D Computer Vision algorithms implemented in Python."
                        />
                    </Box>
                    <Box width={{ base: '100%', xl: '50%' }} p='2'>
                        <WorkItem
                            name="ninja-game"
                            title="Ninja Game"
                            imageSrc="/Images/ninja.jpg"
                            description="A 2D side-scrolling game built with Java."
                        />
                    </Box>
                </Flex>
            </MotionLayout>
        </Container>
    )
}


export default WorkSection;