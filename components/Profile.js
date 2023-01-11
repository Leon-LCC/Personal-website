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
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react"
import { IoLogoGithub , IoLogoLinkedin } from 'react-icons/io5';
import {SiGooglescholar, SiIeee} from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';
import Image from "next/image";

import ProfileItem from "./ProfileItem";

const ProfileSection = () => {
    return (
        <Container centerContent mt='60' mb='10' pt='20' px='0' id='profile'  maxWidth={{base: '90%', lg: '80%'}}>
            <VStack w='100%' align='center' gap='6' py='10' px={{base: 6, md: 16}} bg='#F7F4F2' borderRadius='xl' boxShadow='xl'>
                <Box display={{ md: 'flex' }} mt={{ base: 0, md: 4 }}>
                    <Box flexShrink={0}>
                        <Center display={{ base: 'none', lg: 'flex' }} overflow='hidden' borderRadius="full" borderColor="#685950" borderWidth={4} borderStyle="solid">
                            <Image src="/Images/ID.jpg" alt=" Profile Photo" width={200} height={200} layout='fixed'/>
                        </Center>
                        <Center display={{ base: 'flex', lg: 'none' }} mx={{base:16, md: 0 }} overflow='hidden' borderRadius="full" borderColor="#685950" borderWidth={4} borderStyle="solid">
                            <Image src="/Images/ID.jpg" alt=" Profile Photo" width={170} height={170} layout='fixed' />
                        </Center>
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 3, xl: 16}}>
                        <Box m='4' p='2'>
                            <Heading fontSize={{base: "3xl", md: "4xl", lg: "5xl"}} fontWeight='bold' align='center' pb='1'>Li-Chen Cheng</Heading>
                            <Text fontSize={{ md: "xl", lg: "2xl"}}  align='center'> CS graduate student at NTU</Text>
                        </Box>
                        <HStack spacing={{base:8, xl: 2}} w='100%' justifyContent='center'>
                            <Box>
                                <Link href='mailto:lc.cheng00@gmail.com' target="_blank">
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
                <Box w='100%' borderRadius='xl' boxShadow='xl' bg='#EFEBE7' px='8' py='6'>
                    <Heading variant='section' fontSize={{md: "2xl", lg: "3xl"}} textAlign='left'>About Me</Heading>
                    <Box h='4'/>
                    <Text fontSize={{base: "md", md: "lg", lg: "xl"}} textAlign='justify'>
                        I am currently pursuing a graduate degree in the Graduate Institute of Networking and Multimedia at National Taiwan University. 
                        My research interests lie in the fields of Deep Learning and Computer Vision, with a current focus on the security of AIoT systems. 
                        I am passionate about learning new things and am open to new opportunities!
                    </Text>
                </Box>
                <Box w='100%' borderRadius='xl' boxShadow='xl' bg='#EFEBE7' px='8' py='6'>
                    <Heading variant='section' fontSize={{md: "2xl", lg: "3xl"}} textAlign='left'>Education</Heading>
                    <Box h='4'/>
                    <ProfileItem 
                        title='Master of Science in Computer Science'
                        shortTitle='M.S. in CS'
                        date='2022 - Pres.'
                        location='National Taiwan University, Taiwan' 
                        shortLocation='NTU, Taiwan'
                        description='Supervisor: Prof. Ai-Chun Pang'
                        type='education'
                    />
                    <ProfileItem 
                        title='Bachelor of Science in Computer Science' 
                        shortTitle='B.S. in CS'
                        date='2017 - 2022' 
                        location='National Taiwan University, Taiwan' 
                        shortLocation='NTU, Taiwan'
                        description='GPA: 3.7/4.3' 
                        type='education'
                    />
                    <ProfileItem 
                        title='Bachelor of Arts in Economics' 
                        shortTitle='B.A. in Econ'
                        date='2017 - 2022' 
                        location='National Taiwan University, Taiwan' 
                        shortLocation='NTU, Taiwan'
                        description='Double Major'
                        type='education'
                    />
                </Box>

                <Box w='100%' borderRadius='xl' boxShadow='xl' bg='#EFEBE7' px='8' py='6'>
                    <Heading variant='section' fontSize={{md: "2xl", lg: "3xl"}} textAlign='left'>Experience</Heading>
                    <Box h='4'/>
                    <ProfileItem
                        title='Research Assistant'
                        shortTitle='RA'
                        date='2021 - 2022'
                        location='FGCN Lab, National Taiwan University, Taiwan'
                        shortLocation='FGCN Lab, NTU, Taiwan'
                        description='Supervisor: Prof. Ai-Chun Pang'
                        type='research'
                    />
                    <ProfileItem
                        title='Research Assistant'
                        shortTitle='RA'
                        date='2020 - 2021'
                        location='CITI, Academia Sinica, Taiwan'
                        shortLocation='CITI, Academia Sinica, Taiwan'
                        description='Supervisor: Prof. Jun-Cheng Chen and Prof. Chih-Yu Wang.'
                        type='research'
                    />
                    <ProfileItem
                        title='Summer Intern'
                        shortTitle='Summer Intern'
                        date='2019'
                        location='MediaTek, Taiwan'
                        shortLocation='MediaTek, Taiwan'
                        description='Developed computer vision algorithms.'
                        type='work'
                    />
                </Box>
                <Box w='100%' borderRadius='xl' boxShadow='xl' bg='#EFEBE7' px='8' py='6'>
                    <Heading veriant='section' size="lg" textAlign='left'>Publication</Heading>
                    <Box h='4'/>
                    <HStack spacing={4}>
                        <Text fontSize={{base: "md", md: "lg", lg: "xl"}} textAlign='justify'> View my publication on </Text>
                        <Link href='https://scholar.google.com.tw/' target="_blank">
                            <Button leftIcon={<SiGooglescholar />} variant='ghost' size='xs' fontSize='lg'> Google Scholar </Button>
                        </Link>
                        <Text fontSize={{base: "md", md: "lg", lg: "xl"}} textAlign='justify'> or </Text>
                        <Link href='https://ieeexplore.ieee.org/author/37089280660' target="_blank">
                            <Button leftIcon={<SiIeee />} variant='ghost' size='xs' fontSize='lg'> IEEE Xplore </Button>
                        </Link>
                    </HStack>
                    <Box h='4'/>

                </Box>
                <Box w='100%' borderRadius='xl' boxShadow='xl' bg='#EFEBE7' px='8' py='6'>
                    <Heading veriant='section' size="lg" textAlign='left'> Skill </Heading>
                    <Box h='4'/>
                    <List spacing={3}>
                        <ListItem>
                            Programming Language: Python, C/C++, MATLAB, Java, JavaScript, HTML, CSS, Verilog
                        </ListItem>
                        <ListItem>
                            Framework: PyTorch, TensorFlow, OpenCV, Git, Docker, Linux, Flask, React, Bootstrap
                        </ListItem>
                        <ListItem>
                            Specialization: Generative Adversarial Network, Fedearated Learning
                        </ListItem>
                        <ListItem>
                            Language: English (Fluent), Mandarin (Native), Japanese (Basic)
                        </ListItem>                            
                    </List>
                </Box>
            </VStack>
        </Container>
    )
}

export default ProfileSection