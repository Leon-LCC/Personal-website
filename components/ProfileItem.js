import {
    Box,
    Spacer,
    HStack,
    Text,
    Icon,
} from "@chakra-ui/react"

import {MdLocationOn, MdOutlineLocationOn} from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import { FaStickyNote, FaRegStickyNote } from 'react-icons/fa'
import {BsBriefcaseFill, BsBriefcase} from 'react-icons/bs'
import {RiBookMarkFill, RiBookMarkLine} from 'react-icons/ri'

const ProfileItem = ({ title, shortTitle, date, location, shortLocation, description, type }) => {
    return (
        <Box alignItems="center" w='100%' position='relative' bg='#faf5f0' borderRadius='lg' px='4' py='2' mb='2'>
            <HStack>
                <Icon 
                    as={{'education': FaGraduationCap, 'work': BsBriefcaseFill, 'research': RiBookMarkFill}[type]} 
                    width={{base:4, md: 5, lg: 6}}
                    height={{base:4, md: 5, lg: 6}}
                    color={{'education': '#990000', 'work': '#6E260E', 'research': '#0047AB'}[type]}
                    pt={{base:0, md:1}}
                    ml={{base:0.5 , md:0.2}}
                    mr={{base:0.5 , md:-0.2}}
                />
                <Text fontSize={{md: "xl", lg: "2xl"}} letterSpacing={'tighter'} fontWeight={700} display={{base: 'none', md: 'flex'}}>{title}</Text>
                <Text fontSize='sm' letterSpacing={'tighter'} fontWeight={600} display={{base: 'flex', md: 'none'}}>{shortTitle}</Text>
                <Spacer />
                <Text fontSize={{base: "sm", md: "md", lg: "lg"}} letterSpacing={'tighter'} fontWeight={700}>{date}</Text>
            </HStack>
            <HStack>
                <Icon as={MdLocationOn} width={{base:4, lg: 5}} height={{base:4, lg: 5}} color={'#556B2F'} pt={1} ml='0.5' mr='0.5'/>
                <Text fontSize={{ md: "lg", lg: "xl"}} letterSpacing={'tighter'} display={{base: 'none', md: 'flex'}}>{location}</Text>
                <Text fontSize='sm' letterSpacing={'tighter'} display={{base: 'flex', md: 'none'}}>{shortLocation}</Text>
            </HStack>
            <HStack>
                <Icon as={FaStickyNote} width={{base:3, lg: 4}} height={{base:3, lg: 4}} color={'#DBA520'} pt={1} ml='1' mr='1'/>
                <Text fontSize={{ base: "xs", md: "md", lg: "md"}} letterSpacing={'tighter'} fontStyle='italic'>{description}</Text>
            </HStack>
        </Box>
    );
}

export default ProfileItem