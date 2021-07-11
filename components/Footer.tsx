import { Flex, HStack, Image, Link, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
    return <Flex as='footer' justify='space-between' align='center' px='2' py='1' bgColor='gray.100' border='1px' borderColor='gray.300'>
        <Text>
            Ichor Jewellery 2021
        </Text>
        <Spacer />
        <HStack spacing='2'>
            <Link href='https://www.instagram.com/ichor.jewellery'>
                <Image
                    src='/static/instagram.svg' alt='Instagram' boxSize='8'
                />
            </Link>
            <Link href='https://www.etsy.com/au/shop/IchorJewellery'>
                <Image
                    src='/static/etsy.svg' alt='Etsy' boxSize='8'
                />
            </Link>
        </HStack>
    </Flex>;
};

export default Footer;
