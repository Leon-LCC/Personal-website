import {
    Container,
    Center,
    Text,
    Heading,
    Box,
    VStack,
    Link,
    Button,
    HStack,
    IconButton,
    Icon,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react'

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiGooglescholar, SiIeee } from 'react-icons/si'
import { MdOutlineEmail } from 'react-icons/md'

import Image from 'next/image'

import ProfileItem from '../components/ProfileItem'
import MotionLayout from '../components/MotionLayout'

import profileData from '../data/Profile/data.json'

const ProfileSection = () => {
    const experiences = () => {
        return profileData.experiences.map((item, index) => (
            <ProfileItem
                key={index}
                title={item.title}
                shortTitle={item.shortTitle}
                date={item.date}
                location={item.location}
                shortLocation={item.shortLocation}
                description={item.description}
                type={item.type}
                site={item.site}
            />
        ))
    }

    const education = () => {
        return profileData.education.map((item, index) => (
            <ProfileItem
                key={index}
                title={item.title}
                shortTitle={item.shortTitle}
                date={item.date}
                location={item.location}
                shortLocation={item.shortLocation}
                description={item.description}
                type={item.type}
                site={item.site}
            />
        ))
    }

    const publications = () => {
        return profileData.publications.map((item, index) => (
            <ProfileItem
                key={index}
                title={item.title}
                shortTitle={item.shortTitle}
                date={item.date}
                location={item.location}
                shortLocation={item.shortLocation}
                description={item.description}
                type={item.type}
                site={item.site}
                pdf={item.pdf}
                github={item.github}
                poster={item.poster}
                video={item.video}
                paperlink={item.paperlink}
            />
        ))
    }

    const IconSkill = ({ imgSrc, text }) => {
        return (
            <HStack spacing="0">
                <Image
                    src={imgSrc}
                    alt={text}
                    width={18}
                    height={0}
                    style={{ height: 'auto' }}
                />
                <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    ml="1"
                    fontWeight={400}
                    letterSpacing={'tighter'}
                >
                    {text}
                </Text>
            </HStack>
        )
    }

    return (
        <MotionLayout>
            <Container
                centerContent
                mb="0"
                pt="28"
                px="0"
                id="profile"
                maxWidth="100%"
            >
                <VStack
                    w="100%"
                    align="center"
                    gap="8"
                    py="10"
                    px={{ base: 6, md: 20 }}
                    bg={useColorModeValue('#ffffffff', '#0f0f0fff')}
                >
                    <Box display={{ md: 'flex' }} mt={{ base: 0, md: 4 }}>
                        <Box flexShrink={0}>
                            <Center
                                display={{ base: 'none', lg: 'flex' }}
                                overflow="hidden"
                                borderRadius="40% 25% 25% 25%"
                                borderWidth={2}
                                borderStyle="solid"
                            >
                                <Image
                                    src="/Images/ID.jpg"
                                    alt=" Profile Photo"
                                    width={210}
                                    height={210}
                                />
                            </Center>
                            <Center
                                display={{ base: 'flex', lg: 'none' }}
                                mx={{ base: 16, md: 0 }}
                                overflow="hidden"
                                borderRadius="40% 25% 25% 25%"
                                borderWidth={2}
                                borderStyle="solid"
                            >
                                <Image
                                    src="/Images/ID.jpg"
                                    alt=" Profile Photo"
                                    width={190}
                                    height={190}
                                />
                            </Center>
                        </Box>
                        <Box mt={{ base: 4, md: 3 }} ml={{ md: 12, xl: 24 }}>
                            <Box mx="6" p="2" align="center">
                                <Heading
                                    fontSize={{
                                        base: '3xl',
                                        md: '4xl',
                                        lg: '5xl',
                                    }}
                                    fontWeight="bold"
                                    align="center"
                                    pb="1"
                                >
                                    {profileData.personalInfo.name}
                                </Heading>
                            </Box>
                            <VStack spacing={4} align="center" mt="5">
                                <HStack
                                    spacing={{ base: 8, xl: 2 }}
                                    w="100%"
                                    justifyContent="center"
                                >
                                    <Box>
                                        <Link
                                            href="mailto:lc.cheng00@gmail.com"
                                            target="_blank"
                                        >
                                            <Button
                                                leftIcon={<MdOutlineEmail />}
                                                w="100%"
                                                display={{
                                                    base: 'none',
                                                    xl: 'flex',
                                                }}
                                                variant="solid"
                                                size="sm"
                                                fontSize="lg"
                                            >
                                                {' '}
                                                {
                                                    profileData.personalInfo
                                                        .email
                                                }{' '}
                                            </Button>
                                            <IconButton
                                                aria-label="Email"
                                                icon={<MdOutlineEmail />}
                                                w="100%"
                                                display={{
                                                    base: 'flex',
                                                    xl: 'none',
                                                }}
                                                fontSize="4xl"
                                                size="xs"
                                                colorScheme="whiteAlpha"
                                            />
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link
                                            href="https://github.com/Leon-LCC"
                                            target="_blank"
                                        >
                                            <Button
                                                leftIcon={<IoLogoGithub />}
                                                w="100%"
                                                display={{
                                                    base: 'none',
                                                    xl: 'flex',
                                                }}
                                                variant="solid"
                                                size="sm"
                                                fontSize="lg"
                                            >
                                                {' '}
                                                {
                                                    profileData.personalInfo
                                                        .github
                                                }{' '}
                                            </Button>
                                            <IconButton
                                                aria-label="Github"
                                                icon={<IoLogoGithub />}
                                                w="100%"
                                                display={{
                                                    base: 'flex',
                                                    xl: 'none',
                                                }}
                                                fontSize="4xl"
                                                size="xs"
                                                colorScheme="whiteAlpha"
                                            />
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link
                                            href="https://www.linkedin.com/in/li-chen-cheng/"
                                            target="_blank"
                                        >
                                            <Button
                                                leftIcon={<IoLogoLinkedin />}
                                                w="100%"
                                                display={{
                                                    base: 'none',
                                                    xl: 'flex',
                                                }}
                                                variant="solid"
                                                size="sm"
                                                fontSize="lg"
                                            >
                                                {' '}
                                                {
                                                    profileData.personalInfo
                                                        .name
                                                }{' '}
                                            </Button>
                                            <IconButton
                                                aria-label="Linkedin"
                                                icon={<IoLogoLinkedin />}
                                                w="100%"
                                                display={{
                                                    base: 'flex',
                                                    xl: 'none',
                                                }}
                                                fontSize="4xl"
                                                size="xs"
                                                colorScheme="whiteAlpha"
                                            />
                                        </Link>
                                    </Box>
                                </HStack>
                                <HStack spacing={{ base: 0, md: 2 }} mt="2">
                                    <Link
                                        href="https://scholar.google.com.tw/citations?hl=zh-TW&user=7974KNgAAAAJ"
                                        target="_blank"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button
                                            variant="solid2"
                                            size="xs"
                                            fontSize={{ base: 'md', md: 'lg' }}
                                        >
                                            <Icon as={SiGooglescholar} mr="1" />
                                            <Text display="flex">
                                                Google Scholar{' '}
                                            </Text>
                                        </Button>
                                    </Link>

                                    <Link
                                        href="https://ieeexplore.ieee.org/author/37089280660"
                                        target="_blank"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button
                                            variant="solid2"
                                            size="xs"
                                            fontSize="md"
                                        >
                                            <Icon
                                                as={SiIeee}
                                                boxSize={14}
                                                mr="1"
                                            />
                                            Xplore
                                        </Button>
                                    </Link>
                                </HStack>
                            </VStack>
                        </Box>
                    </Box>
                    <Box w="100%" px={{ base: 2, sm: 8 }} py="5" pt="16">
                        <Heading
                            variant="section"
                            fontSize={{ base: 'xl', lg: '2xl' }}
                            textAlign="left"
                        >
                            About Me
                        </Heading>
                        <Box h="4" />
                        <Text
                            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                            textAlign="justify"
                            borderTopWidth="2px"
                            pt="4"
                            borderRadius="md"
                        >
                            {profileData.personalInfo.bio}
                        </Text>
                    </Box>

                    <Box w="100%" px={{ base: 2, sm: 8 }} py="5">
                        <Heading
                            variant="section"
                            fontSize={{ base: 'xl', lg: '2xl' }}
                            textAlign="left"
                            mb="6"
                        >
                            Experience
                        </Heading>
                        {experiences()}
                    </Box>

                    <Box w="100%" px={{ base: 2, sm: 8 }} py="5">
                        <Heading
                            variant="section"
                            fontSize={{ base: 'xl', lg: '2xl' }}
                            textAlign="left"
                            mb="6"
                        >
                            Education
                        </Heading>
                        {education()}
                    </Box>

                    <Box
                        w="100%"
                        px={{ base: 2, sm: 8 }}
                        py="5"
                        display={{ base: 'none', md: 'block' }}
                    >
                        <Heading
                            variant="section"
                            fontSize={{ base: 'xl', lg: '2xl' }}
                            textAlign="left"
                            mb="6"
                        >
                            Publication
                        </Heading>
                        {publications()}
                    </Box>

                    <Box w="100%" px={{ base: 2, sm: 8 }} py="5">
                        <Heading
                            variant="section"
                            fontSize={{ base: 'xl', lg: '2xl' }}
                            textAlign="left"
                            mb="6"
                        >
                            Skills
                        </Heading>
                        <VStack>
                            <Box
                                alignItems="left"
                                w="100%"
                                px="0"
                                py="4"
                                pb="6"
                                mb="4"
                                borderRadius="lg"
                                bg={useColorModeValue('#FFFFFF', '#0f0f0fff')}
                                borderTopWidth="2px"
                            >
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    letterSpacing={'tighter'}
                                    fontWeight={400}
                                    mb="4"
                                >
                                    Programming Languages
                                </Text>
                                <Flex flexWrap="wrap" h="100%" gridGap="6">
                                    <IconSkill
                                        imgSrc="/Images/Icons/python.png"
                                        text="Python"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/c.png"
                                        text="C++"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/java.png"
                                        text="Java"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/javascript.png"
                                        text="JavaScript"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/matlab.png"
                                        text="Matlab"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/stata.svg"
                                        text="Stata"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/r.png"
                                        text="R"
                                    />
                                </Flex>
                            </Box>
                            <Box
                                alignItems="left"
                                w="100%"
                                px="0"
                                py="4"
                                pb="6"
                                mb="4"
                                borderRadius="lg"
                                bg={useColorModeValue('#FFFFFF', '#0f0f0fff')}
                                borderTopWidth="2px"
                            >
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    letterSpacing={'tighter'}
                                    fontWeight={400}
                                    mb="4"
                                >
                                    Tools
                                </Text>
                                <Flex flexWrap="wrap" h="100%" gridGap="6">
                                    <IconSkill
                                        imgSrc="/Images/Icons/pytorch.png"
                                        text="Pytorch"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/tensorflow.png"
                                        text="Tensorflow"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/tensorboard.png"
                                        text="TensorBoard"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/wandb.svg"
                                        text="WandB"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/scikit.png"
                                        text="Scikit-learn"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/opencv.svg"
                                        text="OpenCV"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/open3d.png"
                                        text="Open3D"
                                    />
                                </Flex>
                            </Box>
                            <Box
                                alignItems="left"
                                w="100%"
                                px="0"
                                py="4"
                                pb="6"
                                mb="4"
                                borderRadius="lg"
                                bg={useColorModeValue('#FFFFFF', '#0f0f0fff')}
                                borderTopWidth="2px"
                            >
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    letterSpacing={'tighter'}
                                    fontWeight={400}
                                    mb="4"
                                >
                                    Web Dev
                                </Text>
                                <Flex flexWrap="wrap" h="100%" gridGap="6">
                                    <IconSkill
                                        imgSrc="/Images/Icons/react.png"
                                        text="React"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/nextjs.png"
                                        text="Next.js"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/threejs.png"
                                        text="Three.js"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/chakra.png"
                                        text="Chakra UI"
                                    />
                                </Flex>
                            </Box>

                            <Box
                                alignItems="left"
                                w="100%"
                                px="0"
                                py="4"
                                pb="6"
                                mb="4"
                                borderRadius="lg"
                                bg={useColorModeValue('#FFFFFF', '#0f0f0fff')}
                                borderTopWidth="2px"
                            >
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    letterSpacing={'tighter'}
                                    fontWeight={400}
                                    mb="4"
                                >
                                    Others
                                </Text>
                                <Flex flexWrap="wrap" h="100%" gridGap="6">
                                    <IconSkill
                                        imgSrc="/Images/Icons/blender.png"
                                        text="Blender"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/ai.png"
                                        text="Illustrator"
                                    />
                                    <IconSkill
                                        imgSrc="/Images/Icons/ps.svg"
                                        text="Photoshop"
                                    />
                                </Flex>
                            </Box>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </MotionLayout>
    )
}

export default ProfileSection
