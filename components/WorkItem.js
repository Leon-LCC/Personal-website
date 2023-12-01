import {
    Box, 
    Text,
    Center,
    Flex,
} from "@chakra-ui/react";

import Image from "next/image";
import NextLink from 'next/link';


const WorkItem = ({ id, title, imageSrc, description }) => {
    return (
        <NextLink href="/work#[id]" as={`/work#${id}`} passHref>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" width="100%">
                <Flex flexWrap="wrap">
                    <Center width={{ base: '100%', md: '30%' }} mb={{ base: '4', md: '0' }}>
                        <Image src={imageSrc} width={200} height={200} />
                    </Center>
                    <Box width={{ base: '100%', md: '70%' }} p="6" h='100%'>
                        <Text fontWeight="bold" fontSize="xl" mb="2">
                        {title}
                        </Text>
                        <Text>{description}</Text>
                    </Box>
                </Flex>
            </Box>
        </NextLink>
    );
};

export default WorkItem;
