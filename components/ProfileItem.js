import {
    Box,
    Spacer,
    HStack,
    Text,
    Icon,
} from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"
import {MdLocationOn, MdOutlineLocationOn} from 'react-icons/md'
import {FaGraduationCap} from 'react-icons/fa'
import {FaStickyNote, FaRegStickyNote} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'
import {RiBookMarkFill, RiBookMarkLine} from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'


const ProfileItem = ({ title, shortTitle, date, location, shortLocation, description, type, github, site, paperlink }) => {
    if (type === 'education' || type === 'work' || type === 'research') {
        return (
            <Box alignItems="center" w='100%' position='relative' px='4' py='2' mb='2' borderRadius='lg' boxShadow='md' bg={useColorModeValue("#FFFFFF", "#323232")}>
                <HStack>
                    <Icon 
                        as={{'education': FaGraduationCap, 'work': BsBriefcaseFill, 'research': RiBookMarkFill}[type]} 
                        width={{base:4, md: 5, lg: 6}}
                        height={{base:4, md: 5, lg: 6}}
                        color={{'education': useColorModeValue('#990000', '#A83F3F'), 'work': useColorModeValue('#6E260E', '#8F7B75'), 'research': useColorModeValue('#0047AB', '#3A86F1')}[type]}
                        p={{base:0, md:0.4}}
                        ml={{base:0.5 , md:0.2}}
                        mr={{base:0.5 , md:-0.2}}
                    />
                    <Text fontSize={{md: "xl", lg: "2xl"}} letterSpacing={'tighter'} fontWeight={700} display={{base: 'none', md: 'flex'}}>{title}</Text>
                    <Text fontSize='sm' letterSpacing={'tighter'} fontWeight={600} display={{base: 'flex', md: 'none'}}>{shortTitle}</Text>
                    <Spacer />
                    <Text fontSize={{base: "sm", md: "md", lg: "lg"}} letterSpacing={'tighter'} fontWeight={700}>{date}</Text>
                </HStack>
                <HStack>
                    <Icon as={useColorModeValue(MdLocationOn, MdOutlineLocationOn)} width={{base:4, lg: 5}} height={{base:4, lg: 5}} color={useColorModeValue('#556B2F', '#A9A9A9')} p={0.5} ml='0.5' mr='0.5'/>
                    <Text fontSize={{ md: "lg", lg: "xl"}} letterSpacing={'tighter'} display={{base: 'none', md: 'flex'}}>{location}</Text>
                    <Text fontSize='sm' letterSpacing={'tighter'} display={{base: 'flex', md: 'none'}}>{shortLocation}</Text>
                </HStack>
                <HStack>
                    <Icon as={useColorModeValue(FaStickyNote, FaRegStickyNote)} width={{base:3, lg: 4}} height={{base:3, lg: 4}} color={'#DBA520'} p={0.5} ml='1' mr='1'/>
                    <Text fontSize={{ base: "xs", md: "md", lg: "md"}} letterSpacing={'tighter'} fontStyle='italic'>{description}</Text>
                </HStack>
            </Box>
        )
    } else if (type === 'publication') {
        return (
            <Box alignItems="center" w='100%' position='relative' px='4' py='2' mb='2' borderRadius='lg' boxShadow='md' display={{base: 'none', md: 'grid' }} bg={useColorModeValue("#FFFFFF", "#323232")}>
                <Text fontSize={{base: 'sm', md: "lg", lg: "xl"}} letterSpacing={'tighter'}>{title}</Text>
                <HStack>
                    <Icon as={BsFillPersonFill} width={{base:4, lg: 5}} height={{base:4, lg: 5}} color={useColorModeValue('#4A4A4A', '#B9AAAA')} p={0.5} ml='0.5' mr='0.5'/>
                    <Text fontSize={{ base: 'xs', md: "md", lg: "lg"}} letterSpacing={'tighter'}>{description}</Text>
                </HStack>
                <HStack>
                    <Icon as={useColorModeValue(MdLocationOn, MdOutlineLocationOn)} width={{base:4, lg: 5}} height={{base:4, lg: 5}} color={useColorModeValue('#556B2F', '#A9A9A9')}  p={0.5} ml='0.5' mr='0.5'/>
                    <Text fontSize={{ base: 'xs', md: "md", lg: "lg"}} letterSpacing={'tighter'}>{location}</Text>
                </HStack>
                <HStack>
                    
                </HStack>
            </Box>
        )
    } else {
        return (
            <Box alignItems="center" w='100%' position='relative' bg='#F7F4F2' borderRadius='lg' px='4' py='2' mb='2' boxShadow='md'>
            </Box>
        )
    }
}



export default ProfileItem