import { Center, HStack, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
    return <Center as='footer' py='1' bgColor='gray.200' border='1px' borderColor='gray.400'>
        <HStack spacing='2'>
            <Link href='https://www.instagram.com/ichor.jewellery'>
                <Image
                    src='/static/instagram.svg' alt='Instagram' boxSize='8'
                />
            </Link>
            <Text>
                Ichor Jewellery 2021
            </Text>
            <Link href='https://www.etsy.com/au/shop/IchorJewellery'>
                <Image
                    src='/static/etsy.svg' alt='Etsy' boxSize='8'
                />
            </Link>
        </HStack>
    </Center>;
};

export default Footer;
