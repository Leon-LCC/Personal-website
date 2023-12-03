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
        <Container centerContent maxWidth='90%' pt='20' mb='20' id='post'>
            <MotionLayout>
                <Box w='100%' align='center'>
                    <Heading size="2xl" align='center' mb='-5'> Posts </Heading>
                    <Box w='90%' align='center' bg={useColorModeValue("#F7F4F2", "#262626")} borderRadius='lg' pt='10' pb='12' mb='14' px='8'> 
                    <Text fontSize={{base:"sm", sm:'md', md: "lg", lg: "xl"}} align='center'> 
                        I write articles about research &#x1F4DA; / learning &#x1F4D6; / programming &#x1F4BB;, and random thoughts &#x1F4AC;. <br />
                        (Literally anything that comes to my mind &#128514;) <br />
                        Click on the cards to learn more about them! &#128209; <br />
                    </Text></Box>
                </Box>
                <Flex flexWrap="wrap" w="100%">
                    <Box width={{ base: '100%', xl: '50%' }} p='2'>
                        <PostItem
                            name="article-review"
                            title="Article Review" 
                            imageSrc="/Images/article-review.jpg"
                            description="My reviews of articles related to collaborative learning and other topics in computer networking."
                        />
                    </Box>
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