import {
    Container,
    Flex,
    Box,
    VStack,
} from "@chakra-ui/react"
import Layout from "../components/Layout"

const PostBlock = () => {
    return (
        <Layout>
        <Container centerContent maxWidth='70%' my='60' py='4' id='project'>
            <VStack spacing='2' w='100%'>
                <Box w='100%' bg='teal.400'>
                    Project
                </Box>
                <Box w='100%' bg='teal.500'>
                    Project
                </Box>
                <Box w='100%' bg='teal.600'>
                    Project
                </Box>
            </VStack>
        </Container>
        </Layout>
    )
}

export default PostBlock