import { Container, Flex, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import WorkItem from "../components/WorkItem";
import WorkPage from "../components/WorkPage";
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

import MotionLayout from "../components/MotionLayout";



const WorkSection = () => {
    const router = useRouter();
    
    const renderWorkPage = () => {
        switch (router.asPath) {
            case '/work#project1':
                return (
                    <WorkPage 
                        id="project1"
                        imageSrc="/Images/mystie-large.png"
                        markdownSrc="/Markdown/Project1.md"
                    />
                );
            case '/work#project2':
                return (
                    <WorkPage 
                        id="project2"
                        imageSrc="/Images/mystie-large.png"
                        markdownSrc="/Markdown/Project2.md"
                    />
                );
            default:
                return (
                    <Container centerContent maxWidth='90%' mt='100pt' id='work'>
                        <MotionLayout>
                            <Flex flexWrap="wrap" w="100%">
                                <Box width={{ base: '100%', xl: '50%' }} padding="6">
                                    <WorkItem
                                        id="project1"
                                        title="Project1" 
                                        imageSrc="/Images/mysite.jpg"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec auctor, nisl eu ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl."
                                    />
                                </Box>
                                <Box width={{ base: '100%', xl: '50%' }} padding="6">
                                    <WorkItem
                                        id="project2"
                                        title="Project2"
                                        imageSrc="/Images/mysite.jpg"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec auctor, nisl eu ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl."
                                    />
                                </Box>
                            </Flex>
                        </MotionLayout>
                    </Container>
                )
        }
    }

    return (
        <Layout>
            {renderWorkPage()}
        </Layout>
    )
}


export default dynamic(() => Promise.resolve(WorkSection), { ssr: false });