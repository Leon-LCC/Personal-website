import Image from "next/image";
import NextLink from 'next/link';
import {
    Box,
    HStack,
    VStack,
    Flex,
    Spacer,
    Text,
    Heading,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";



const NavigationBar = () => {
    return (
        <Flex justifyContent="center" alignItems="center" py='1' px={{base:6, md:12, lg:24}} position='fixed' top='0' w='100%' bg='#faf5f0' zIndex='100'>
            <HStack spacing={3} >
                <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">
                    <Button variant="unstyled" size='lg'>
                        <Image src="/Images/logo.gif" alt="logo" width='70%' height='49%' layout='fixed'/>
                    </Button>
                </Link>
                <NextLink href='/'>
                    <Button variant="unstyled" size='xl'>
                        <Heading fontSize='4xl' justifyContent="center" letterSpacing={'tighter'} variant='logo' display='flex' h='100%' lineHeight='100%'>Leon</Heading>
                    </Button>
                </NextLink>
            </HStack >
            <Spacer />
            <Box bg='#faf5f0' display={{ base: 'flex', md: 'none' }}>
                <Menu>
                    <MenuButton as={IconButton} icon={<HamburgerIcon />} bg='#faf5f0' variant='outline' aria-label='Options'>
                    </MenuButton>
                    <MenuList>
                        <NextLink href='/'>
                            <MenuItem>Home</MenuItem>
                        </NextLink>
                        <NextLink href='/#profile'>
                            <MenuItem>Profile</MenuItem>
                        </NextLink>
                        <NextLink href='/work'>
                            <MenuItem>Work</MenuItem>
                        </NextLink>
                        <NextLink href='/post'>
                            <MenuItem>Post</MenuItem>
                        </NextLink>
                    </MenuList>
                </Menu>
            </Box>
            <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
                <Button variant='route' size='xs' height={{base: '40px'}}>
                    <NextLink href='/'>
                        <Text fontSize='2xl' letterSpacing={'tighter'} fontWeight={100}>Home</Text>
                    </NextLink>
                </Button>
                <Button variant='route' size='xs' height={{base: '40px'}}>
                    <NextLink href='/#profile'>
                        <Text fontSize='2xl' letterSpacing={'tighter'} fontWeight={100}>Profile</Text>
                    </NextLink>
                </Button>
                <Button variant='route' size='xs' height={{base: '40px'}}>
                    <NextLink href='/work'>
                        <Text fontSize='2xl' letterSpacing={'tighter'} fontWeight={100}>Work</Text>
                    </NextLink>
                </Button>
                <Button variant='route' size='xs' height={{base: '40px'}}>
                    <NextLink href='/post'>
                        <Text fontSize='2xl' letterSpacing={'tighter'} fontWeight={100}>Post</Text>
                    </NextLink>
                </Button>
            </HStack >
        </Flex>
    )
}

export default NavigationBar;