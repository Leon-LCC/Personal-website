import {
    Flex
} from "@chakra-ui/react"


const footer = () => {
    return (
        <Flex justifyContent="center" alignItems="center">
            &copy; {new Date().getFullYear()} Li-Chen Cheng. All Rights Reserved.
        </Flex>
    )
}

export default footer