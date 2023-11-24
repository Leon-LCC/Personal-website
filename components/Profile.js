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
    Icon
} from "@chakra-ui/react"
import { IoLogoGithub , IoLogoLinkedin } from 'react-icons/io5';
import {SiGooglescholar, SiIeee} from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';
import Image from "next/image";
import NextLink from 'next/link';
import ProfileItem from "./ProfileItem";


const ProfileSection = () => {
    return (
        <Container centerContent mt='60' mb='10' pt='20' px='0' id='profile'  maxWidth={{base: '90%', lg: '80%'}}>
            <VStack w='100%' align='center' gap='8' py='10' px={{base: 6, md: 16}} bg='#F7F4F2' borderRadius='xl' boxShadow='xl'>
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
                <Box w='100%' px={{base: 6, sm: 8}} py='6'>
                    <Heading variant='section' fontSize={{base: "xl", lg: "3xl"}} textAlign='left'>About Me</Heading>
                    <Box h='4'/>
                    <Text fontSize={{base: "md", md: "lg", lg: "xl"}} textAlign='justify'>
                        I am currently pursuing a graduate degree in the Graduate Institute of Networking and Multimedia at National Taiwan University. 
                        My research interests lie in the fields of Deep Learning and Computer Vision, with a current focus on the security of AIoT systems such as federated learning and split learning.
                        See my experiences below or check out my projects <NextLink href='/work' passHref><Link color='#5D514A'>here</Link></NextLink>.
                    </Text>
                </Box>

                <Box w='100%' px={{base: 5, sm: 8}} py='6'>
                    <Heading variant='section' fontSize={{base: "xl", lg: "3xl"}} textAlign='left'>Experience</Heading>
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
                        date='2021 - 2022'
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

                <Box w='100%' px={{base: 5, sm: 8}} py='6'>
                    <Heading variant='section' fontSize={{base: "xl", lg: "3xl"}} textAlign='left'>Education</Heading>
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

                <Box w='100%' px={{base: 5, sm: 8}} py='6'>
                    <Heading veriant='section' fontSize={{base: "xl", lg: "3xl"}} textAlign='left'>Publication</Heading>
                    <Box h='4'/>
                    <HStack spacing={{base: 0, md: 2}}>
                        <Text fontSize={{md: "lg", lg: "xl"}} display={{ base: 'none', md: 'flex' }} textAlign='justify'> View on </Text>
                        <Link href='https://scholar.google.com.tw/citations?hl=zh-TW&user=7974KNgAAAAJ' target="_blank" style={{ textDecoration: 'none' }}>
                            <Button variant='solid2' size='xs' fontSize={{base: "md", md: "lg"}}>
                                <Icon as={SiGooglescholar} mr='1'/>
                                <Text display="flex"  lineHeight='50%' py='8pt'>Google Scholar </Text>
                            </Button>
                        </Link>
                        <Text fontSize={{base: "md", md: "lg", lg: "xl"}} textAlign='justify' display={{ base: 'none', md: 'flex' }}> or </Text>
                        <Box h='4' w='6' display={{ base: 'flex', md: 'none' }}/>
                        <Link href='https://ieeexplore.ieee.org/author/37089280660' target="_blank" style={{ textDecoration: 'none' }}>
                            <Button variant='solid2' size='xs' fontSize={{base: "md", md: "lg"}} display={{ base: 'none', sm: 'flex' }}>
                                <Icon as={SiIeee} boxSize={12} mt='0.5' mr='1'/>
                                Xplore
                            </Button>
                            <IconButton aria-label="IEEE" icon={<Icon as={SiIeee}/>} variant='solid3' size='xs' fontSize='5xl' display={{ base: 'flex', sm: 'none' }}/>
                        </Link>
                    </HStack>
                    <Box h='4'/>
                    <ProfileItem
                        title='Fedequal: Defending model poisoning attacks in heterogeneous federated learning'
                        shortTitle='Fedequal: Defending model poisoning attacks in heterogeneous federated learning'
                        date='2021'
                        location='IEEE Global Communications Conference 2021'
                        shortLocation='IEEE GLOBECOM 2021'
                        description='Ling-Yuan Chen, Te-Chuan Chiu, Ai-Chun Pang, Li-Chen Cheng'
                        type='publication'
                    />
                    <ProfileItem
                        title='Dual-masking framework against two-sided model attacks in federated learning'
                        date='2021'
                        location='IEEE Global Communications Conference 2021'
                        shortLocation='IEEE GLOBECOM 2021'
                        description='Te-Chuan Chiu, Wei-Che Lin, Ai-Chun Pang, Li-Chen Cheng'
                        type='publication'
                    />
                    <ProfileItem
                        title='KinStyle: A Strong Baseline Photorealistic Kinship Face Synthesis with an Optimized StyleGAN Encoder'
                        date='2022'
                        location='Asian Conference on Computer Vision 2022'
                        shortLocation='ACCV 2022'
                        description='Li-Chen Cheng, Shu-Chuan Hsu, Pin-Hua Lee, Hsiu-Chieh Lee, Che-Hsien Lin, Jun-Cheng Chen, Chih-Yu Wang'
                        type='publication'
                    />
                    <ProfileItem
                        title='Kinship Face Synthesis Evaluation Website with Gamified Mechanism'
                        date='2022'
                        location='IEEE International Conference on Multimedia and Expo Workshops 2022'
                        shortLocation='IEEE ICMEW 2022'
                        description='Hsiu-Chieh Lee, Che-Hsien Lin, Li-Chen Cheng, Shu-Chuan Hsu, Jun-Cheng Chen, Chih-Yu Wang'
                        type='publication'
                    />
                    <ProfileItem
                        title='StyleDNA: A High-Fidelity Age and Gender Aware Kinship Face Synthesizer'
                        date='2021'
                        location='IEEE International Conference on Automatic Face and Gesture Recognition 2021'
                        shortLocation='IEEE FG 2021'
                        description='Che-Hsien Lin, Hung-Chun Chen, Li -Chen Cheng, Shu-Chuan Hsu, Jun-Cheng Chen, Chih-Yu Wang'
                        type='publication'
                    />
                </Box>

            </VStack>
        </Container>
    )
}

export default ProfileSection