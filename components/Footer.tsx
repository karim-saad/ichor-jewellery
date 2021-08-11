import { Flex, HStack, Image, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return <Flex
        as='footer'
        justify='space-between'
        align='center'
        px='2'
        py='1'
        bgColor='gray.100'
        border='1px'
        borderColor='gray.300'
    >
        <Text>
            Ichor Jewellery 2021
        </Text>
        <Spacer />
        <HStack spacing='2'>
            <Link href='https://www.instagram.com/ichor.jewellery' passHref>
                <Image
                    src='/static/instagram.svg'
                    alt='Instagram'
                    height='8'
                    width='8'
                />
            </Link>
            <Link href='https://www.etsy.com/au/shop/IchorJewellery' passHref>
                <Image
                    src='/static/etsy.svg'
                    alt='Etsy'
                    height='8'
                    width='8'
                />
            </Link>
        </HStack>
    </Flex>;
};

export default Footer;
