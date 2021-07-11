import { Layout, ProductCard } from '../components';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { InferGetStaticPropsType } from 'next';
import { dynamoClient } from '../lib';

export default function LandingPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout layoutProps={{ title: 'Ichor Jewellery' }}>
        <Wrap spacing={['4', null, '8']} mx={['4', null, '8']} my={['2', null, '4']}>
            {products.map(product =>
                <WrapItem key={product.id}>
                    <ProductCard product={product} />
                </WrapItem>
            )}
        </Wrap>
    </Layout>;
}

export const getStaticProps = async () => {
    return {
        props: {
            products: await dynamoClient.getProducts()
        }
    };
};
