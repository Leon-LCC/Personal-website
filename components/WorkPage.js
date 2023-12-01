import { 
    Box,
    Button,
    Heading
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { motion } from "framer-motion";

import { remark } from 'remark';
import html from 'remark-html';


const WorkPage = ({ imageSrc, markdownSrc}) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }


    return (
        <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 1, type: 'easeInOut' }} style={{ position: 'relative', backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Box style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
                <Box pt='100pt' pb='5%' px='10%' w='100%'>
                    <NextLink href="/work">
                        <Button variant="solid3" size='lg' fontSize='2xl' color='white'>
                            &#8810; &#xa0; Back
                        </Button>
                    </NextLink>
                </Box>
                <Box px='20%' w='100%'>
                    <Heading as="h1" size="2xl" mb='4' mt='4' color='white'> 123 </Heading>
                </Box>
            </Box>
            <Box width='100%' w='100%'>
                {imageSrc}
            </Box>
        </motion.div>
    );
};

export default WorkPage;
