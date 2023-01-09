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
        <Flex justifyContent="center" alignItems="center" p='2' px='28' mx='2' position='fixed' top='0' w='100%' zIndex='1'>
            <HStack spacing={4}>
                <Box bg='blue.500'>
                    <Image src="/Images/logo.gif" alt="logo" width='100%' height='71%' />
                </Box>
                <Box bg='red.500'>
                    <Heading fontSize='5xl'> Leon </Heading>
                </Box>
            </HStack >
            <Spacer />
            <Box bg='teal.500' display={{ base: 'flex', md: 'none' }}>
                <Menu>
                    <MenuButton as={IconButton} icon={<HamburgerIcon />} bg='teal.500' variant='outline' aria-label='Options'>
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
                    </MenuList>
                </Menu>
            </Box>
            <HStack spacing={10} display={{ base: 'none', md: 'flex' }}>
                <NextLink href='/'>
                    <Box bg='teal.500'>
                        <Text fontSize='4xl'>Home</Text>
                    </Box>
                </NextLink>
                <NextLink href='/#bio'>
                    <Box bg='teal.500'>
                        <Text fontSize='4xl'>About</Text>
                    </Box>
                </NextLink>
                <NextLink href='/project'>
                    <Box bg='teal.500'> 
                        <Text fontSize='4xl'>Project</Text>
                    </Box>
                </NextLink>
            </HStack >
        </Flex>
    )
}

export default NavigationBar;