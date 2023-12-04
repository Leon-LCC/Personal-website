import {
    Box, 
    Text,
    Heading,
    Center,
    Flex,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";

import Image from "next/image";
import NextLink from 'next/link';


const PostItem = ({ name, title, imageSrc, description }) => {
    return (
        <NextLink href={`/post/${name}`}>
            <Box borderWidth="1px" borderRadius="lg" p="8" bg={useColorModeValue("#F7F4F2", "#262626")} _hover={{ boxShadow: 'xl' }} h='100%'>
                <Flex flexWrap="wrap" alignItems='center' h='100%'>
                    <Center width={{ base: '100%', md: '40%' }} mb={{ base: '4', md: '0' }} borderRadius='lg' overflow='hidden' borderColor={useColorModeValue("#685950", "whiteAlpha.700")} borderWidth={3}>
                        <Image src={imageSrc} alt={title} priority={true} width={300} height={300}/>
                    </Center>
                    <Center width={{ base: '100%', md: '60%' }} pl={{ base: '0', md: '30pt' }}>
                        <VStack alignItems='flex-start'gridGap='4'>
                            <Heading fontWeight="bold" fontSize="3xl">
                                {title}
                            </Heading>
                            <Text justifyContent='space-between'>
                                {description}
                            </Text>
                        </VStack>
                    </Center>
                </Flex>
            </Box>
        </NextLink>
    );
};

export default PostItem;
