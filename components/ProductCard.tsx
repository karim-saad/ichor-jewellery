import { Box, LinkBox, LinkOverlay, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../typings';
import React from 'react';


const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { handle, name, price } = product;
    const imageDimension = useBreakpointValue([140, 280]);

    return <LinkBox d='flex' flexDir='column' maxW={imageDimension}>
        <Box>
            <Image
                src={`/${handle}/0.jpg`}
                alt={name}
                height={imageDimension || 280}
                width={imageDimension || 280}
            />
        </Box>
        <Text fontSize={['md', 'lg']} fontWeight='semibold' mt='2' align='center'>
            {name}
        </Text>
        <Text fontSize={['sm', 'md']} align='center'>
            {`$${price} AUD`}
        </Text>
        <Link href={`/products/${handle}`} passHref>
            <LinkOverlay />
        </Link>
    </LinkBox>;
};

export default ProductCard;
