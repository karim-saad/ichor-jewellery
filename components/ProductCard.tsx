import { AspectRatio, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { Product } from '../typings';
import React from 'react';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { description, displayName, internalName } = product;

    return <Flex flexDir='column' maxW={['40', '52']}>
        <AspectRatio ratio={1 / 1}>
            <Image
                srcSet={`${internalName}/0-small.jpg 160w, ${internalName}/0-medium.jpg 210w`}
                sizes='(max-width: 30em) 160px, 210px'
                src={`/${internalName}/0-medium.jpg`}
                alt={displayName} rounded='lg'
            />
        </AspectRatio>
        <Text fontSize={['md', 'lg']} fontWeight='semibold'>
            {displayName}
        </Text>
        <Divider />
        <Text fontSize={['sm', 'inherit']}>
            {description}
        </Text>
    </Flex>;
};

export default ProductCard;
