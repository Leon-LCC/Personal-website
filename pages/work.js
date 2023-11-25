import {
    Container,
    Flex,
    Box,
    VStack,
} from "@chakra-ui/react"
import Layout from "../components/Layout"

import { motion } from "framer-motion";


const ProjectBlock = () => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }

    return (
        <Layout>
            <motion.article initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 1, type: 'easeInOut' }} style={{ position: 'relative' }}>
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
            </motion.article>
        </Layout>
    )
}

export default ProjectBlock