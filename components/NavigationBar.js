import Image from "next/image";
import Link from "next/link";
import {
    Box,
    HStack,
    Flex,
    Spacer,
    Text,
    Heading
} from '@chakra-ui/react'



const NavigationBar = () => {
    return (
        <Flex justifyContent="center" alignItems="center" p='2' px='28' mx='2'>
            <HStack spacing={4}>
                <Box bg='blue.500'>
                    <Image src="/Images/logo.gif" alt="logo" width='100%' height='71%' />
                </Box>
                <Box bg='red.500'>
                    <Heading fontSize='5xl'> Leon </Heading>
                </Box>
            </HStack >
            <Spacer />
            <HStack spacing={10} >
                <Box bg='teal.500'>
                    <Text fontSize='4xl'>Home</Text>
                </Box>
                <Box bg='teal.500'>
                    <Text fontSize='4xl'>Project</Text>
                </Box>
                <Box bg='teal.500'>
                    <Text fontSize='4xl'>Th</Text>
                </Box>
            </HStack >
        </Flex>
    )
}

export default NavigationBar;