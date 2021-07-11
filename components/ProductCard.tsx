import { AspectRatio, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { Product } from '../typings';
import React from 'react';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { description, displayName, internalName } = product;

    return <Flex flexDir='column' maxW={['36', null, '56']}>
        <AspectRatio ratio={1 / 1}>
            <Image src={`/${internalName}/thumbnail.jpg`} alt={displayName} rounded='lg' />
        </AspectRatio>
        <Text fontSize={['md', null, 'lg']} fontWeight='semibold'>
            {displayName}
        </Text>
        <Divider />
        <Text fontSize={['sm', null, 'inherit']}>
            {description}
        </Text>
    </Flex>;
};

export default ProductCard;
