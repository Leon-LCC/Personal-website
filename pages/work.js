import {
    Container,
    Flex,
    Box,
    Text,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react'

import WorkItem from '../components/WorkItem'
import MotionLayout from '../components/MotionLayout'

const WorkSection = () => {
    return (
        <Container
            centerContent
            maxWidth="100%"
            pt={{ base: '20%', sm: '14%', lg: '8%' }}
            mb="20"
            id="work"
        >
            <MotionLayout>
                <Box w="100%" align="center">
                    <Text
                        fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                        align="center"
                        opacity={0.6}
                    >
                        Selected Works (Not Including My Research Projects)
                    </Text>
                </Box>
                <Flex flexWrap="wrap" w="100%">
                    <Box width={{ base: '100%', xl: '50%' }} p="2" pb="4">
                        <WorkItem
                            name="personal-site"
                            title="My Portfolio"
                            imageSrc="/Images/mysite.png"
                            description="A personal website built with React, Next.js, and Chakra UI. Some cool animations are also added with Framer Motion and Three.js."
                        />
                    </Box>
                    <Box width={{ base: '100%', xl: '50%' }} p="2" pb="4">
                        <WorkItem
                            name="ninja-game"
                            title="Ninja Game"
                            imageSrc="/Images/ninja.png"
                            description="A 2D side-scrolling game built with Java."
                        />
                    </Box>
                    <Box width={{ base: '100%', xl: '50%' }} p="2" pb="4">
                        <WorkItem
                            name="2dcv-algo-imp"
                            title="2DCV Algorithms Implementation"
                            imageSrc="/Images/leaf.jpg"
                            description="Classic 2D Computer Vision algorithms implemented in Python."
                        />
                    </Box>
                    <Box width={{ base: '100%', xl: '50%' }} p="2" pb="4">
                        <WorkItem
                            name="3dcv-algo-imp"
                            title="3DCV Algorithms Implementation"
                            imageSrc="/Images/3dcv.jpg"
                            description="Some 3D Computer Vision algorithms implemented in Python, such as Stereo Matching and Visual Odometry."
                        />
                    </Box>
                </Flex>
            </MotionLayout>
        </Container>
    )
}

export default WorkSection
