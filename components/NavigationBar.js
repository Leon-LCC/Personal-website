import Image from "next/image";
import NextLink from 'next/link';
import {
    Box,
    HStack,
    Flex,
    Spacer,
    Text,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";



const NavigationBar = () => {
    return (
        <Flex justifyContent="center" alignItems="center" px={[8,24]} position='fixed' top='0' w='100%' bg='#faf5f0'>
            <HStack spacing={2} >
                <Image src="/Images/logo.gif" alt="logo" width='70%' height='49%'/>
                <NextLink href='/'>
                    <Heading fontSize='4xl' letterSpacing={'tighter'} variant='logo'>Leon</Heading>
                </NextLink>
            </HStack >
            <Spacer />
            <Box bg='#faf5f0' display={{ base: 'flex', md: 'none' }}>
                <Menu>
                    <MenuButton as={IconButton} icon={<HamburgerIcon />} bg='#E3D5CA' variant='outline' aria-label='Options'>
                    </MenuButton>
                    <MenuList>
                        <NextLink href='/'>
                            <MenuItem>Home</MenuItem>
                        </NextLink>
                        <NextLink href='/#bio'>
                            <MenuItem>About</MenuItem>
                        </NextLink>
                        <NextLink href='/project'>
                            <MenuItem>Project</MenuItem>
                        </NextLink>
                        <NextLink href='/post'>
                            <MenuItem>Post</MenuItem>
                        </NextLink>
                    </MenuList>
                </Menu>
            </Box>
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                <NextLink href='/'>
                    <Box bg='#faf5f0'>
                        <Text fontSize='2xl' letterSpacing={'tighter'}>Home</Text>
                    </Box>
                </NextLink>
                <NextLink href='/#bio'>
                    <Box bg='#faf5f0'>
                        <Text fontSize='2xl' letterSpacing={'tighter'}>About</Text>
                    </Box>
                </NextLink>
                <NextLink href='/project'>
                    <Box bg='#faf5f0'> 
                        <Text fontSize='2xl' letterSpacing={'tighter'}>Project</Text>
                    </Box>
                </NextLink>
                <NextLink href='/post'>
                    <Box bg='#faf5f0'>
                        <Text fontSize='2xl' letterSpacing={'tighter'}>Post</Text>
                    </Box>
                </NextLink>
            </HStack >
        </Flex>
    )
}

export default NavigationBar;