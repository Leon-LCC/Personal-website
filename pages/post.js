import {
    Container,
    Flex,
    Box,
    Text,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react"

import PostItem from "../components/PostItem";
import MotionLayout from "../components/MotionLayout";



const PostSection = () => {
    return (
        <Container centerContent maxWidth='100%' pt={{base:'20%', sm:'14%', lg:'8%'}} mb='20' id='post'>
            <MotionLayout>
                <Box w='100%' align='center'>
                    <Text fontSize={{base:"xs", sm:'sm', md: "md"}} align='center' opacity={0.6}>
                        Click on the cards to learn more about them! <br />
                    </Text>
                </Box>
                <Flex flexWrap="wrap" w="100%">
                    <Box width={{ base: '100%', xl: '50%' }} p='2'>
                        <PostItem
                            name="note-GD"
                            title="Notes on Gradient Descent Algorithms"
                            imageSrc="/Images/gd-example.jpg"
                            description="My learning notes on the mathematical foundations of gradient descent algorithms."
                        />
                    </Box>
                </Flex>
            </MotionLayout>
        </Container>
    )
}

export default PostSection