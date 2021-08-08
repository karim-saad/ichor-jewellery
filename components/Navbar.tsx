import { Flex, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return <Flex
        as='nav'
        bgColor='yellow.300'
        px={['4', null, '8']}
        py='2'
    >
        <LinkBox>
            <HStack spacing='4'>
                <Image
                    src='/static/logo.png'
                    alt='Ichor Jewellery'
                    height={64}
                    width={64}
                />
                <Text as='h1' fontSize='2xl' d={['none', null, 'inherit']}>
                    Ichor Jewellery
                </Text>
            </HStack>
            <Link href='/' passHref>
                <LinkOverlay />
            </Link>
        </LinkBox>
    </Flex >;
};

export default Navbar;
