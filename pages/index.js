import {
    Container,
    Flex,
    Grid, GridItem, Box,
} from "@chakra-ui/react"
import ProfileSection from "../components/Profile"
import Layout from "../components/Layout"

const HomePage = ({}) => {
    return (
        <Layout>
            <Container centerContent my='40' py='4' px='0' maxWidth={{base: '90%', lg: '80%'}}>
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
            <ProfileSection />
        </Layout>
    )
}

export default HomePage