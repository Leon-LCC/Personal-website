import { Box, Center, Container, Text, Button } from '@chakra-ui/react'

import Image from 'next/image'
import NextLink from 'next/link'

const Custom404 = () => {
    return (
        <Container maxW="container.lg" align="center">
            <Center h="95vh">
                <Box>
                    <Text fontSize="7xl" fontWeight="bold" w="100%">
                        404
                    </Text>
                    <Text fontSize="5xl" fontWeight="bold" w="100%">
                        Page Not Found
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" w="100%" mt="8">
                        You aren't supposed to be here!!
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" w="100%">
                        But since you are here,{' '}
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" w="100%">
                        I'll introduce you to my snake.
                    </Text>
                    <Box mt="2">
                        <Box
                            w="100px"
                            h="100px"
                            borderRadius="lg"
                            overflow="hidden"
                        >
                            <Image
                                src="/Images/404.jpg"
                                alt="404"
                                width={100}
                                height={100}
                            />
                        </Box>
                        <Text fontSize="lg" fontWeight="bold" w="100%" mt="2">
                            His name is Sasuke.
                        </Text>
                        <Text fontSize="lg" fontWeight="bold" w="100%">
                            He's a cutie.
                        </Text>
                    </Box>
                    <NextLink href="/">
                        <Button
                            variant="route"
                            size="none"
                            mt="8"
                            fontSize={'4xl'}
                        >
                            {' '}
                            &#9664; Go Back Home
                        </Button>
                    </NextLink>
                </Box>
            </Center>
        </Container>
    )
}

export default Custom404
