import Image from 'next/image'
import NextLink from 'next/link'
import {
    Box,
    HStack,
    Flex,
    Spacer,
    Text,
    Heading,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

const NavigationBar = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            py="3"
            px={{ base: 6, md: 12, lg: 24 }}
            position="fixed"
            top="0"
            w="100%"
            bg={useColorModeValue('#f4f4f4', '#000000ff')}
            zIndex="100"
            opacity={0.85}
        >
            <HStack spacing={3}>
                <NextLink
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                >
                    <Box
                        mb="4pt"
                        bg={useColorModeValue('#f4f4f4', '#000000ff')}
                    >
                        <Image
                            src="/Images/Icons/logo.gif"
                            alt="logo"
                            width="60"
                            height="40"
                            priority={true}
                        />
                    </Box>
                </NextLink>
                <NextLink href="/">
                    <Button
                        variant="unstyled"
                        size="xl"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading
                            fontSize="3xl"
                            letterSpacing={'tighter'}
                            variant="logo"
                            display={{ base: 'none', md: 'flex' }}
                        >
                            LEON
                        </Heading>
                    </Button>
                </NextLink>
            </HStack>

            <Spacer />

            <IconButton
                aria-label="Theme"
                bg={useColorModeValue('#515050ff', '#F7F4F2')}
                color={useColorModeValue('whiteAlpha.900', 'black')}
                colorScheme="black"
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                onClick={toggleColorMode}
                display={{ base: 'flex', md: 'none' }}
                mr="15pt"
            />

            <Box
                display={{ base: 'flex', md: 'none' }}
                bg={useColorModeValue('#f4f4f4', '#000000ff')}
            >
                <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<HamburgerIcon />}
                        variant="outline"
                        aria-label="Options"
                        bg={useColorModeValue('#f4f4f4', '#000000ff')}
                    ></MenuButton>
                    <MenuList>
                        <NextLink href="/">
                            <MenuItem>Home</MenuItem>
                        </NextLink>
                        <NextLink href="/profile">
                            <MenuItem>Profile</MenuItem>
                        </NextLink>
                        <NextLink href="/work">
                            <MenuItem>Work</MenuItem>
                        </NextLink>
                        <NextLink href="/post">
                            <MenuItem>Post</MenuItem>
                        </NextLink>
                    </MenuList>
                </Menu>
            </Box>

            <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
                <Button variant="route" size="xs" height={{ base: '40px' }}>
                    <NextLink href="/">
                        <Text
                            fontSize="2xl"
                            letterSpacing={'tighter'}
                            fontWeight={300}
                        >
                            Home
                        </Text>
                    </NextLink>
                </Button>
                <Button variant="route" size="xs" height={{ base: '40px' }}>
                    <NextLink href="/profile">
                        <Text
                            fontSize="2xl"
                            letterSpacing={'tighter'}
                            fontWeight={300}
                        >
                            Profile
                        </Text>
                    </NextLink>
                </Button>
                <Button variant="route" size="xs" height={{ base: '40px' }}>
                    <NextLink href="/work">
                        <Text
                            fontSize="2xl"
                            letterSpacing={'tighter'}
                            fontWeight={300}
                        >
                            Work
                        </Text>
                    </NextLink>
                </Button>
                <Button variant="route" size="xs" height={{ base: '40px' }}>
                    <NextLink href="/post">
                        <Text
                            fontSize="2xl"
                            letterSpacing={'tighter'}
                            fontWeight={300}
                        >
                            Post
                        </Text>
                    </NextLink>
                </Button>
                <IconButton
                    aria-label="Theme"
                    bg={useColorModeValue('#515050ff', '#ebebebff')}
                    color={useColorModeValue('whiteAlpha.900', 'black')}
                    colorScheme="black"
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                    _hover={{
                        bg: useColorModeValue('#323232', '#fafafaff'),
                        transition: 'background 0.2s',
                    }}
                />
            </HStack>
        </Flex>
    )
}

export default NavigationBar
