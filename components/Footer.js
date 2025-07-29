import {
    Flex,
    Box,
    HStack,
    useColorModeValue,
    IconButton,
    Text,
} from '@chakra-ui/react'

import NextLink from 'next/link'
import Image from 'next/image'

import { IoLogoLinkedin } from 'react-icons/io5'

const Footer = () => {
    const ContactInfo = ({ imgSrc, text, herf }) => {
        return (
            <NextLink href={herf} target="_blank">
                <HStack spacing="1">
                    <Box h={{ base: '13pt', md: '16pt', lg: '18pt' }}>
                        <Image
                            src={imgSrc}
                            alt={text}
                            priority={true}
                            sizes="40vh"
                            style={{ width: 'auto', height: '100%' }}
                            width={10}
                            height={10}
                        />
                    </Box>
                </HStack>
            </NextLink>
        )
    }

    return (
        <Box>
            <Flex
                justifyContent="center"
                alignItems="center"
                opacity={0.4}
                mb="1"
                fontSize={{ base: 'sm', md: 'md' }}
                letterSpacing="tighter"
            >
                CONTACT ME
            </Flex>
            <Flex
                flexWrap="wrap"
                flexDirection="row"
                gap={{ base: '3', sm: '4', lg: '6' }}
                alignItems="center"
                justifyContent="center"
                mx="10"
                mb="2"
                p="5"
                pt="2"
                borderRadius="lg"
            >
                <ContactInfo
                    text="Resume"
                    herf="https://drive.google.com/file/d/1jm8_Q5teuUOlfwiCw5ey_1cYacnW-2s4/view?usp=sharing"
                    imgSrc={useColorModeValue(
                        '/Images/Icons/cv.png',
                        '/Images/Icons/cv-white.png'
                    )}
                />
                <ContactInfo
                    text="Gmail"
                    herf="mailto:lc.cheng00@gmail.com"
                    imgSrc={useColorModeValue(
                        '/Images/Icons/email.png',
                        '/Images/Icons/email-white.png'
                    )}
                />
                <IconButton
                    as={NextLink}
                    href="https://www.linkedin.com/in/li-chen-cheng/"
                    target="_blank"
                    aria-label="Linkedin"
                    icon={<IoLogoLinkedin />}
                    w="0%"
                    fontSize="4xl"
                    size="xs"
                    colorScheme="whiteAlpha"
                />
                <ContactInfo
                    text="Github"
                    herf="https://github.com/Leon-LCC"
                    imgSrc={useColorModeValue(
                        '/Images/Icons/github.png',
                        '/Images/Icons/github-white.png'
                    )}
                />
                <ContactInfo
                    text="Twitter"
                    herf="https://twitter.com/LeonLCC_"
                    imgSrc="/Images/Icons/twitter.png"
                />
            </Flex>
            <Flex justifyContent="center" alignItems="center">
                &copy; LI-CHEN CHENG - {new Date().getFullYear()}
            </Flex>
        </Box>
    )
}

export default Footer
