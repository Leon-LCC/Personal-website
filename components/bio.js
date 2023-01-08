import {
    Container,
    Text,
    Flex,
    Box,
    VStack,
    Grid, GridItem
} from "@chakra-ui/react"


const BioBlock = () => {
    return (
        <Container centerContent maxWidth='70%' my='60' py='4' id='bio'>
            <VStack spacing='2' w='100%'>
                 <Grid templateRows='repeat(14, 1fr)' templateColumns='repeat(5, 1fr)' gap={6} w='100%'>
                        <GridItem rowSpan={6} colSpan={2} bg='tomato'>
                            Photo
                        </GridItem>
                        <GridItem rowSpan={4} colSpan={3} bg='papayawhip'>
                            Name
                        </GridItem>
                        <GridItem rowSpan={2} colSpan={3} bg='papayawhip'>
                            Link
                        </GridItem>
                        <GridItem rowSpan={8} colSpan={5} bg='tomato'>
                            About
                        </GridItem>
                </Grid>
                <Box w='100%' bg='teal.400'>
                    Experience
                </Box>
                <Box w='100%' bg='teal.500'>
                    Skill
                </Box>
                <Box w='100%' bg='teal.600'>
                    Hobby
                </Box>
            </VStack>
        </Container>
    )
}

export default BioBlock