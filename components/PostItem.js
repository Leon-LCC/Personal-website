import {
    Box,
    Text,
    Heading,
    Center,
    Flex,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'

import Image from 'next/image'
import NextLink from 'next/link'

const PostItem = ({ name, title, imageSrc, description }) => {
    return (
        <NextLink href={`/post/${name}`}>
            <Box
                borderRadius="lg"
                p="5%"
                h="100%"
                borderTopWidth="2px"
                opacity={0.9}
                _hover={{ opacity: 1 }}
            >
                <Flex flexWrap="wrap" alignItems="center" h="100%">
                    <Center
                        width={{ base: '100%', md: '30%' }}
                        mb={{ base: '8%', md: '0%' }}
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Image
                            src={imageSrc}
                            alt={title}
                            priority={true}
                            sizes="40vh"
                            width={300}
                            height={300}
                        />
                    </Center>
                    <Center
                        width={{ base: '100%', md: '60%' }}
                        pl={{ base: '0', md: '30pt' }}
                    >
                        <VStack alignItems="flex-start" gridGap="4">
                            <Heading
                                fontWeight="bold"
                                fontSize="3xl"
                                opacity={0.9}
                            >
                                {title}
                            </Heading>
                            <Text justifyContent="space-between" opacity={0.5}>
                                {description}
                            </Text>
                        </VStack>
                    </Center>
                </Flex>
            </Box>
        </NextLink>
    )
}

export default PostItem
