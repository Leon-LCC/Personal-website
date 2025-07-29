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
    useColorModeValue,
} from '@chakra-ui/react'

import MotionLayout from '../components/MotionLayout'

import profileData from '../data/Profile/data.json'

import FloatingMenu from '../components/FloatingMenu'

const HomePage = () => {
    return (
        <MotionLayout>
            <FloatingMenu />
            <Container
                centerContent
                mt={{ base: '25%', md: '15%', lg: '7%' }}
                mb="5%"
                pt={{ base: '40%', md: '15%' }}
                pb="30%"
                px="0"
                maxWidth="100%"
                h="100%"
                id="home"
            >
                <Box
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    h="50%"
                    w={{ base: '100%', md: '60%' }}
                    zIndex="1"
                    mt={{ base: '-5%', md: '0%' }}
                >
                    <Heading
                        fontSize={{ base: '6xl', lg: '5xl' }}
                        my="5%"
                        fontWeight={200}
                        align="center"
                        letterSpacing="tighter"
                        lineHeight="1"
                        p="3"
                    >
                        {profileData.personalInfo.shortname}
                    </Heading>
                </Box>
            </Container>
        </MotionLayout>
    )
}

export default HomePage
