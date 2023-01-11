import {
    Flex
} from "@chakra-ui/react"


const Footer = () => {
    return (
        <Flex justifyContent="center" alignItems="center" opacity={0.8}>
            &copy; {new Date().getFullYear()} Li-Chen Cheng. All Rights Reserved.
        </Flex>
    )
}

export default Footer