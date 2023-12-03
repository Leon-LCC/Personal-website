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
    Flex
} from "@chakra-ui/react"

import { IoLogoGithub , IoLogoLinkedin} from 'react-icons/io5';
import {SiGooglescholar, SiIeee} from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';

import Image from "next/image";
import NextLink from 'next/link';

import ProfileItem from "../components/ProfileItem";
import MotionLayout from "../components/MotionLayout";

import profileData from '../data/Profile/data.json';


const ProfileSection = () => {
    console.log(profileData)
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
            <HStack spacing='0'>
                <Image src={imgSrc} alt={text} width={30} height={0} priority={true} style={{ height: 'auto' }}/>
                <Text fontSize={{base: "md", md: "lg"}} ml='2' fontWeight={600}>{text}</Text>
            </HStack>
        )
    }

    return (
        <MotionLayout>
            <Container centerContent mb='10' pt='20' px='0' id='profile'  maxWidth={{base: '90%', lg: '80%'}}>
                <VStack w='100%' align='center' gap='8' py='10' px={{base: 6, md: 16}} borderRadius='xl' boxShadow='xl' bg={useColorModeValue("#F7F4F2", "#262626")}>
                    <Box display={{ md: 'flex' }} mt={{ base: 0, md: 4 }}>
                        <Box flexShrink={0}>
                            <Center display={{ base: 'none', lg: 'flex' }} overflow='hidden' borderRadius="full" borderWidth={4} borderStyle="solid" borderColor={useColorModeValue("#685950", "whiteAlpha.700")}> 
                                <Image src="/Images/ID.jpg" alt=" Profile Photo" width={200} height={200}/>
                            </Center>
                            <Center display={{ base: 'flex', lg: 'none' }} mx={{base:16, md: 0 }} overflow='hidden' borderRadius="full" borderColor={useColorModeValue("#685950", "whiteAlpha.700")} borderWidth={4} borderStyle="solid">
                                <Image src="/Images/ID.jpg" alt=" Profile Photo" width={170} height={170} />
                            </Center>
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 3, xl: 16}}>
                            <Box m='4' p='2' align='center'>
                                <Heading fontSize={{base: "3xl", md: "4xl", lg: "5xl"}} fontWeight='bold' align='center' pb='1'>Li-Chen Cheng</Heading>
                                <Text fontSize={{ md: "xl", lg: "2xl"}}  align='center' pl='12pt'> CS graduate student @ NTU</Text>
                            </Box>
                            <HStack spacing={{base:8, xl: 2}} w='100%' justifyContent='center'>
                                <Box>
                                    <Link href='mailto:lc.cheng00@gmail.com' target="_blank" >
                                        <Button leftIcon={<MdOutlineEmail />} w='100%' display={{ base: 'none', xl: 'flex' }} variant='solid' size='sm' fontSize='lg'> lc.cheng00@gmail.com </Button>
                                        <IconButton aria-label="Email" icon={<MdOutlineEmail />} w='100%' display={{ base: 'flex', xl: 'none' }} fontSize='4xl' size='xs' colorScheme='whiteAlpha'/>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href='https://github.com/Leon-LCC' target="_blank">
                                        <Button leftIcon={<IoLogoGithub />} w='100%' display={{ base: 'none', xl: 'flex' }} variant='solid' size='sm' fontSize='lg'> Leon-LCC </Button>
                                        <IconButton aria-label="Github" icon={<IoLogoGithub />} w='100%' display={{ base: 'flex', xl: 'none' }} fontSize='4xl' size='xs' colorScheme='whiteAlpha'/>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href='https://www.linkedin.com/in/li-chen-cheng/' target="_blank">
                                        <Button leftIcon={<IoLogoLinkedin />} w='100%' display={{ base: 'none', xl: 'flex' }} variant='solid' size='sm' fontSize='lg'> Li-Chen Cheng </Button>
                                        <IconButton aria-label="Linkedin" icon={<IoLogoLinkedin />} w='100%' display={{ base: 'flex', xl: 'none' }} fontSize='4xl' size='xs' colorScheme='whiteAlpha'/>
                                    </Link>
                                </Box>  
                            </HStack>
                        </Box>
                    </Box>
                    <Box w='100%' px={{base: 2, sm: 8}} py='4'>
                        <Heading variant='section' fontSize={{base: "xl", lg: "3xl"}} textAlign='left'>About Me</Heading>
                        <Box h='4'/>
                        <Text fontSize={{base: "md", md: "lg", lg: "xl"}} textAlign='justify'>
                            I am currently pursuing a graduate degree in the Graduate Institute of Networking and Multimedia at National Taiwan University. 
                            My research interests lie in the fields of Deep Learning and Computer Vision, with a current focus on the security of AIoT systems such as federated learning and split learning.
                            See my experiences below or check out my projects
                            <NextLink href='/work' passHref><Text fontSize={{base: "md", md: "lg", lg: "xl"}} textAlign='justify' as="span" color={useColorModeValue("#5D514A", "#C3C3C3")}> here</Text></NextLink>.
                        </Text>
                    </Box>

                    <Box w='100%' px={{base: 2, sm: 8}} py='4'>
                        <Heading variant='section' fontSize={{base: "xl", lg: "3xl"}} textAlign='left' mb='4'>Experience</Heading>
                        {experiences()}
                    </Box>

                    <Box w='100%' px={{base: 2, sm: 8}} py='4'>
                        <Heading variant='section' fontSize={{base: "xl", lg: "3xl"}} textAlign='left' mb='4'>Education</Heading>
                        {education()}
                    </Box>

                    <Box w='100%' px={{base: 2, sm: 8}} py='4'>
                        <Heading veriant='section' fontSize={{base: "xl", lg: "3xl"}} textAlign='left' mb='4'>Publication</Heading>
                        <HStack spacing={{base: 0, md: 2}} mb='4'>
                            <Text fontSize={{md: "lg", lg: "xl"}} display={{ base: 'none', md: 'flex' }} textAlign='justify'> View on </Text>
                            <Link href='https://scholar.google.com.tw/citations?hl=zh-TW&user=7974KNgAAAAJ' target="_blank" style={{ textDecoration: 'none' }}>
                                <Button variant='solid2' size='xs' fontSize={{base: "md", md: "lg"}}>
                                    <Icon as={SiGooglescholar} mr='1'/>
                                    <Text display="flex">Google Scholar </Text>
                                </Button>
                            </Link>
                            <Text fontSize={{base: "md", md: "lg", lg: "xl"}} textAlign='justify' display={{ base: 'none', md: 'flex' }}> or </Text>
                            <Box h='4' w='6' display={{ base: 'flex', md: 'none' }}/>
                            <Link href='https://ieeexplore.ieee.org/author/37089280660' target="_blank" style={{ textDecoration: 'none' }}>
                                <Button variant='solid2' size='xs' fontSize="md" display={{ base: 'none', sm: 'flex' }}>
                                    <Icon as={SiIeee} boxSize={14} mr='1'/>
                                    Xplore
                                </Button>
                                <IconButton aria-label="IEEE" icon={<Icon as={SiIeee}/>} variant='solid3' size='xs' fontSize='5xl' display={{ base: 'flex', sm: 'none' }}/>
                            </Link>
                        </HStack>
                        {publications()}
                    </Box>

                    <Box w='100%' px={{base: 2, sm: 8}} py='4'>
                        <Heading veriant='section' fontSize={{base: "xl", lg: "3xl"}} textAlign='left' mb='4'>Skills</Heading>
                        <VStack>
                            <Box alignItems="left" w='100%' px='4' py='3' pb='6' mb='2' borderRadius='lg' boxShadow='md' bg={useColorModeValue("#FFFFFF", "#323232")}>
                                <Text fontSize={{base: "lg", lg: "2xl"}} letterSpacing={'tighter'} fontWeight={700} mb='4'>Programming Languages</Text>
                                <Flex flexWrap="wrap" h='100%' gridGap='6'>
                                    <IconSkill imgSrc='/Images/Icons/python.png' text='Python'/>
                                    <IconSkill imgSrc='/Images/Icons/c.png' text='C++'/>
                                    <IconSkill imgSrc='/Images/Icons/java.png' text='Java'/>
                                    <IconSkill imgSrc='/Images/Icons/javascript.png' text='JavaScript'/>
                                    <IconSkill imgSrc='/Images/Icons/matlab.png' text='Matlab'/>
                                    <IconSkill imgSrc='/Images/Icons/stata.svg' text='Stata'/>
                                    <IconSkill imgSrc='/Images/Icons/r.png' text='R'/>
                                </Flex>
                            </Box>
                            <Box alignItems="left" w='100%' px='4' py='3' pb='6' mb='2' borderRadius='lg' boxShadow='md' bg={useColorModeValue("#FFFFFF", "#323232")}>
                                <Text fontSize={{base: "lg", lg: "2xl"}} letterSpacing={'tighter'} fontWeight={700} mb='4'>Tools</Text>
                                <Flex flexWrap="wrap" h='100%' gridGap='6'>
                                    <IconSkill imgSrc='/Images/Icons/pytorch.png' text='Pytorch'/>
                                    <IconSkill imgSrc='/Images/Icons/tensorflow.png' text='Tensorflow'/>
                                    <IconSkill imgSrc='/Images/Icons/tensorboard.png' text='TensorBoard'/>
                                    <IconSkill imgSrc='/Images/Icons/wandb.svg' text='WandB'/>
                                    <IconSkill imgSrc='/Images/Icons/scikit.png' text='Scikit-learn'/>
                                    <IconSkill imgSrc='/Images/Icons/opencv.svg' text='OpenCV'/>
                                    <IconSkill imgSrc='/Images/Icons/open3d.png' text='Open3D'/>
                                </Flex>
                            </Box>
                            <Box alignItems="left" w='100%' px='4' py='3' pb='6' mb='2' borderRadius='lg' boxShadow='md' bg={useColorModeValue("#FFFFFF", "#323232")}>
                                <Text fontSize={{base: "lg", lg: "2xl"}} letterSpacing={'tighter'} fontWeight={700} mb='4'>Web Dev</Text>
                                <Flex flexWrap="wrap" h='100%' gridGap='6'>
                                    <IconSkill imgSrc='/Images/Icons/react.png' text='React'/>
                                    <IconSkill imgSrc='/Images/Icons/nextjs.png' text='Next.js'/>
                                    <IconSkill imgSrc='/Images/Icons/threejs.png' text='Three.js'/>
                                    <IconSkill imgSrc='/Images/Icons/chakra.png' text='Chakra UI'/>
                                </Flex>
                            </Box>

                            <Box alignItems="left" w='100%' px='4' py='3' pb='6' mb='2' borderRadius='lg' boxShadow='md' bg={useColorModeValue("#FFFFFF", "#323232")}>
                                <Text fontSize={{base: "lg", lg: "2xl"}} letterSpacing={'tighter'} fontWeight={700} mb='4'>Others</Text>
                                <Flex flexWrap="wrap" h='100%' gridGap='6'>
                                    <IconSkill imgSrc='/Images/Icons/blender.png' text='Blender'/>
                                    <IconSkill imgSrc='/Images/Icons/ai.png' text='Illustrator'/>
                                    <IconSkill imgSrc='/Images/Icons/ps.svg' text='Photoshop'/>
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