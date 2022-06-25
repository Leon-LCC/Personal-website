import {
    Container,
    Text,
    Flex,
    Grid, GridItem, Box,
} from "@chakra-ui/react"
import NavigationBar from "../components/NavigationBar"
import BioBlock from "../components/bio"
import footer from "../components/footer" 

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <Container centerContent maxWidth='70%' my='20' py='4'>
                <Grid templateRows='repeat(9, 1fr)' templateColumns='repeat(3, 1fr)' gap={6} w='100%'>
                    <GridItem rowSpan={5} colSpan={3} bg='tomato'>
                        COOl ICON
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={3} bg='papayawhip'>
                        Hello
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} bg='papayawhip'>
                        BIO
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} bg='tomato'>
                        Project
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} bg='tomato'>
                        Contact
                    </GridItem>
                </Grid>
            </Container>
            <BioBlock />
            <footer />
        </>
    )
}

export default HomePage