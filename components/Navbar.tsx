import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar: React.FC = () => {
    return <Flex as='nav' px='3' py='2' bgColor='yellow.300'>
        <HStack spacing='2'>
            <Image
                src='/static/logo.png' alt='Ichor Jewellery' boxSize='16' rounded='md'
            />
            <Text as='h1' fontSize='2xl'>
                Ichor Jewellery
            </Text>
        </HStack>
    </Flex >;
};

export default Navbar;
