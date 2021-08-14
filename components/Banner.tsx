import { Box, Center, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Banner: React.FC = () => {
    return <Center as='header' py={1} bgColor='gray.300'>
        <HStack spacing={2}>
            <Box>
                <Image
                    src='/static/technics.svg'
                    alt='Construction'
                    height={16}
                    width={16}
                />
            </Box>
            <Text>
                Under Construction!
            </Text>
            <Box>
                <Image
                    src='/static/technics.svg'
                    alt='Construction'
                    height={16}
                    width={16}
                />
            </Box>
        </HStack>
    </Center>;
};

export default Banner;
