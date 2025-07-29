import {
    Box,
    Spacer,
    HStack,
    Text,
    Icon,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    MdLocationOn,
    MdOutlineLocationOn,
    MdOutlineDocumentScanner,
} from 'react-icons/md'
import {
    FaGraduationCap,
    FaStickyNote,
    FaRegStickyNote,
    FaFilePdf,
    FaGithub,
    FaYoutube,
    FaStaylinked,
} from 'react-icons/fa'
import { BsBriefcaseFill, BsFillPersonFill } from 'react-icons/bs'
import { RiBookMarkFill } from 'react-icons/ri'

import NextLink from 'next/link'

const ProfileItem = ({
    title,
    shortTitle,
    date,
    location,
    shortLocation,
    description,
    type,
    site,
    pdf,
    github,
    poster,
    video,
    paperlink,
}) => {
    const urls = () => {
        return (
            <HStack spacing={6} mt="3" ml="1" opacity={0.8}>
                {pdf && (
                    <NextLink href={pdf} target="_blank">
                        <HStack spacing={1}>
                            <IconButton
                                icon={<FaFilePdf />}
                                variant="solid3"
                                size="none"
                                fontSize="sm"
                                color={useColorModeValue(
                                    'rgba(243, 102, 102, 1)',
                                    '#C07C78'
                                )}
                            />
                            <Text fontSize="sm" letterSpacing={'tighter'}>
                                PDF
                            </Text>
                        </HStack>
                    </NextLink>
                )}
                {site && (
                    <NextLink href={site} target="_blank">
                        <HStack spacing={1}>
                            <IconButton
                                icon={<FaStaylinked />}
                                variant="solid3"
                                size="none"
                                fontSize="md"
                                color={useColorModeValue('#0047AB', '#3A86F1')}
                            />
                            <Text fontSize="sm" letterSpacing={'tighter'}>
                                Site
                            </Text>
                        </HStack>
                    </NextLink>
                )}
                {github && (
                    <NextLink href={github} target="_blank">
                        <HStack spacing={1}>
                            <IconButton
                                icon={<FaGithub />}
                                variant="solid3"
                                size="none"
                                fontSize="md"
                                color={useColorModeValue('#4A4A4A', '#B9AAAA')}
                            />
                            <Text fontSize="sm" letterSpacing={'tighter'}>
                                Github
                            </Text>
                        </HStack>
                    </NextLink>
                )}
                {poster && (
                    <NextLink href={poster} target="_blank">
                        <HStack spacing={1}>
                            <IconButton
                                icon={<MdOutlineDocumentScanner />}
                                variant="solid3"
                                size="none"
                                fontSize="md"
                                color="#C5941C"
                            />
                            <Text fontSize="sm" letterSpacing={'tighter'}>
                                Poster
                            </Text>
                        </HStack>
                    </NextLink>
                )}
                {video && (
                    <NextLink href={video} target="_blank">
                        <HStack spacing={1}>
                            <IconButton
                                icon={<FaYoutube />}
                                variant="solid3"
                                size="none"
                                fontSize="md"
                                color={useColorModeValue('#990000', '#A83F3F')}
                            />
                            <Text fontSize="sm" letterSpacing={'tighter'}>
                                Video
                            </Text>
                        </HStack>
                    </NextLink>
                )}
            </HStack>
        )
    }

    if (type === 'education' || type === 'work' || type === 'research') {
        return (
            <Box
                alignItems="center"
                w="100%"
                position="relative"
                px="0"
                py="3"
                pb="2"
                mb="4"
                borderRadius="lg"
                bg={useColorModeValue('#FFFFFF', '#0f0f0fff')}
                borderTopWidth="2px"
            >
                <HStack mb="2">
                    <Icon
                        as={
                            {
                                education: FaGraduationCap,
                                work: BsBriefcaseFill,
                                research: RiBookMarkFill,
                            }[type]
                        }
                        width={{ base: 4, md: 5, lg: 5 }}
                        height={{ base: 4, md: 5, lg: 6 }}
                        color={
                            {
                                education: useColorModeValue(
                                    '#0f0f0fff',
                                    '#FFFFFF'
                                ),
                                work: useColorModeValue('#0f0f0fff', '#FFFFFF'),
                                research: useColorModeValue(
                                    '#0f0f0fff',
                                    '#FFFFFF'
                                ),
                            }[type]
                        }
                        p={{ base: 0, md: 0.4 }}
                        ml={{ base: 0.5, md: 0.2 }}
                        mr={{ base: 0.5, md: -0.2 }}
                    />
                    <Text
                        fontSize={{ md: 'lg', lg: 'xl' }}
                        letterSpacing={'tighter'}
                        fontWeight={400}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        {title}
                    </Text>
                    <Text
                        fontSize="sm"
                        letterSpacing={'tighter'}
                        fontWeight={400}
                        display={{ base: 'flex', md: 'none' }}
                    >
                        {shortTitle}
                    </Text>
                    <Spacer />
                    <Text
                        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                        letterSpacing={'tighter'}
                        fontWeight={400}
                    >
                        {date}
                    </Text>
                </HStack>
                <HStack mb="2" opacity={0.7}>
                    <Icon
                        as={useColorModeValue(
                            MdLocationOn,
                            MdOutlineLocationOn
                        )}
                        width={{ base: 4, lg: 5 }}
                        height={{ base: 4, lg: 5 }}
                        color={useColorModeValue('#8a9774ff', '#A9A9A9')}
                        p={0.5}
                        ml="0.5"
                        mr="0.5"
                    />
                    <NextLink href={site} target="_blank">
                        <Text
                            fontSize={{ md: 'sm', lg: 'md' }}
                            letterSpacing={'tighter'}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {location}
                        </Text>
                        <Text
                            fontSize="xs"
                            letterSpacing={'tighter'}
                            display={{ base: 'flex', md: 'none' }}
                        >
                            {shortLocation}
                        </Text>
                    </NextLink>
                </HStack>
                <HStack opacity={0.7}>
                    <Icon
                        as={useColorModeValue(FaStickyNote, FaRegStickyNote)}
                        width={{ base: 3, lg: 4 }}
                        height={{ base: 3, lg: 4 }}
                        color={'#c6ac6aff'}
                        p={0.5}
                        mx="1"
                    />
                    <Text
                        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                        letterSpacing={'tighter'}
                    >
                        {description}
                    </Text>
                </HStack>
            </Box>
        )
    } else if (type === 'publication') {
        return (
            <Box
                alignItems="center"
                w="100%"
                position="relative"
                px="0"
                pt="4"
                pb="4"
                mb="4"
                borderRadius="lg"
                display={{ base: 'none', md: 'grid' }}
                bg={useColorModeValue('#FFFFFF', '#0f0f0fff')}
                borderTopWidth="2px"
            >
                <NextLink href={paperlink} target="_blank">
                    <Text
                        fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
                        fontWeight={400}
                        letterSpacing={'tighter'}
                    >
                        {title}
                    </Text>
                </NextLink>
                <HStack mt="2">
                    <Icon
                        as={BsFillPersonFill}
                        width={{ base: 4, lg: 5 }}
                        height={{ base: 4, lg: 5 }}
                        color={useColorModeValue('#4A4A4A', '#B9AAAA')}
                        p={0.5}
                        ml="0.5"
                        mr="0.5"
                        opacity={0.7}
                    />
                    <Text
                        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                        letterSpacing={'tighter'}
                        opacity={0.7}
                    >
                        {description}
                    </Text>
                </HStack>
                <HStack mt="2">
                    <Icon
                        as={useColorModeValue(
                            MdLocationOn,
                            MdOutlineLocationOn
                        )}
                        width={{ base: 4, lg: 5 }}
                        height={{ base: 4, lg: 5 }}
                        color={useColorModeValue('#556B2F', '#A9A9A9')}
                        p={0.5}
                        ml="0.5"
                        mr="0.5"
                        opacity={0.7}
                    />
                    <Text
                        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                        letterSpacing={'tighter'}
                        opacity={0.7}
                    >
                        {location}
                    </Text>
                </HStack>
                {urls()}
            </Box>
        )
    }
}

export default ProfileItem
