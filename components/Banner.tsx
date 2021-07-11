import { Center, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Banner: React.FC = () => {
    return <Center as='header' py='1' bgColor='gray.100' border='1px' borderColor='gray.300'>
        <HStack spacing='2'>
            <Image
                src='/static/technics.svg' alt='Construction' boxSize='5'
            />
            <Text>
                Under Construction!
            </Text>
            <Image
                src='/static/technics.svg' alt='Construction' boxSize='5'
            />
        </HStack>
    </Center>;
};

export default Banner;
