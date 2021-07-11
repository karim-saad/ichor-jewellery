import { Image } from '@chakra-ui/react';
import { Product } from '../typings';
import React from 'react';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { description, displayName, internalName } = product;
    return <div className='rounded flex flex-col'>
        <Image src={`/${internalName}/thumbnail.jpg`} alt={displayName} boxSize='48' />
        <p className=''>
            {displayName}
        </p>
        <p>
            {description}
        </p>
    </div>;
};

export default ProductCard;
