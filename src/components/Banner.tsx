import { Box, Center, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner: React.FC = () => {
    return <Center as='header' py={1} bgColor='gray.300'>
        <HStack spacing={2}>
            <Box>
                <Image
                    src='/technics.svg'
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
                    src='/technics.svg'
                    alt='Construction'
                    height={16}
                    width={16}
                />
            </Box>
            <Link href='https://www.etsy.com/au/shop/IchorJewellery' passHref>
                Please check out our Etsy for now!
            </Link>
        </HStack>
    </Center>;
};

export default Banner;
