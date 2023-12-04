import {
    Box,
    Button,
    Flex,
    Text,
    Heading,
    Container,
    useColorModeValue,
    VStack,
    HStack,
    IconButton,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";

import glob from 'glob';
import matter from 'gray-matter';


import { Prose } from '@nikolovlazar/chakra-ui-prose';

import ReactMarkdown  from "react-markdown"
import gfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css';

import MotionLayout from "../../components/MotionLayout";

import fs from 'fs';
import path from "path";

import NextLink from 'next/link';


import { FaGithub } from "react-icons/fa";
import { FaStaylinked } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";





const WorkPage = ({ frontmatter, markdownBody }) => {
    const imageSrc = frontmatter.image;
    const title = frontmatter.title;
    const date = frontmatter.date;
    const description = frontmatter.description;
    const github = frontmatter.github;
    const site = frontmatter.site;
    const download = frontmatter.download;
    const tags = frontmatter.tags;

    const urls = () => {
        return (
            <HStack spacing={8} mt='8'>
                {github && (
                    <NextLink href={github} target="_blank">
                        <IconButton icon={<FaGithub />} variant="solid3" size='sm' fontSize='4xl' color='white'/>
                    </NextLink>
                )}
                {site && (
                    <NextLink href={site} target="_blank">
                        <IconButton icon={<FaStaylinked />} variant="solid3" size='sm' fontSize='4xl' color='white'/>
                    </NextLink>
                )}
                {download && (
                    <NextLink href={download} target="_blank">
                        <IconButton icon={<IoDownloadOutline />} variant="solid3" size='sm' fontSize='4xl' color='white'/>
                    </NextLink>
                )}
            </HStack>
        );
    }

    const tagsList = () => {
        return (
            <Flex flexWrap="wrap" alignItems='center' h='100%' gridGap='3' mt='12'>
                {tags.map((tag) => (
                    <Text key={tag} justifyContent='space-between' fontSize={{ base: "sm", lg: "md"}} color='white' bg='gray.700' px='2' py='1' borderRadius='md'> {tag} </Text>
                ))}
            </Flex>
        );
    }

    const splitMarkdown = markdownBody.split('---');
    
    const createPages = () => {
        return (
            <Tabs variant='soft-rounded' size='md' colorScheme={useColorModeValue("blackAlpha", "whiteAlpha")}>
                <TabPanels>
                    {splitMarkdown.map((page, index) => (
                        <TabPanel key={index}>
                            <Prose>
                                <ReactMarkdown remarkPlugins={[gfm, remarkMath, remarkGemoji]} rehypePlugins={[rehypeKatex]} children={page} skipHtml/>
                            </Prose>
                        </TabPanel>
                    ))}
                </TabPanels>
                <TabList align='center' justifyContent='center' mt='10'>
                    {splitMarkdown.map((page, index) => (
                        <Tab key={index} color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")} mx='1'>{index+1}</Tab>
                    ))}
                </TabList>
            </Tabs>
        );
    }

    return (
        <MotionLayout>
            <Box style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
                <Box pt='20' pb='5%' px={{base: '0%', sm:'4%', md: '10%'}} w='100%'>
                    <NextLink href="/work">
                        <Button variant="solid3" size='lg' fontSize='2xl' color='white'>
                            &#8810; &#xa0; Back
                    </Button>
                    </NextLink>
                </Box>
                <VStack px={{base: '5%', sm:'10%', md: '20%'}} pt='2%' w='100%' alignItems='right'>
                    <Heading as="h1" size="3xl" color='white' mb='2' textShadow={"3px 3px #7E7E7E"}> {title} </Heading>
                    <Text fontSize={{ base: "lg", lg: "xl"}} color='whiteAlpha.700'> {date} </Text>
                    <Text fontSize={{ base: "xl", lg: "2xl"}} color='white' pt='6'> {description} </Text>
                    {urls()}
                    {tagsList()}
                </VStack>
            </Box>
            <Container mb='10' pt='20' px='0' id='profile'  maxWidth={{base: '90%', lg: '80%'}}>
                <Box  w='100%' mt='-40' py='10' px={{base: 6, md: 16}} borderRadius='xl' boxShadow='xl' bg={useColorModeValue("#F7F4F2", "#262626")}>
                    {createPages()}
                </Box>
            </Container>
        </MotionLayout>
    );
};

export default WorkPage;

export async function getStaticPaths() {
    const files = glob.sync('data/Markdown/work/*.md');
    const slugs = files.map((file) => {
      const slug = file.split('/').slice(-1)[0].replace('.md', '');
      return { params: { slug } };
    });
  
    return {
      paths: slugs,
      fallback: false,
    };
}

export async function getStaticProps(context) {
    const { slug } = context.params;
    const filePath = path.join(process.cwd(), 'data', 'Markdown', 'work', `${slug}.md`);
    const fileContent = await fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        props: {
            frontmatter: data,
            markdownBody: content,
        },
    };
}

