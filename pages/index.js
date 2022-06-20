import {
    Container,
    Text,
    Flex
} from "@chakra-ui/react"
import NavigationBar from "../components/NavigationBar"
import BioBlock from "../components/bio"
import footer from "../components/footer" 

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <Container centerContent maxWidth='80%'>
                <Flex justifyContent="center" alignItems="center">
                    <Text>Home Page</Text>
                </Flex>
            </Container>
            <BioBlock />
            <footer />
        </>
    )
}

export default HomePage