import { Layout, ProductCard } from '../components';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { IchorAPI } from '../typings';
import { InferGetStaticPropsType } from 'next';
import { ichorAxios } from '../lib';

export default function LandingPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout layoutProps={{ title: 'Ichor Jewellery' }}>
        <Wrap
            spacing={['4', null, '8']} mx={['4', null, '8']} my={['2', null, '4']} justify='center'>
            {products.map(product =>
                <WrapItem key={product.id}>
                    <ProductCard product={product} />
                </WrapItem>
            )}
        </Wrap>
    </Layout>;
}

export const getStaticProps = async () => {
    console.log(await ichorAxios.get('products'));
    const { data: { products } } = await ichorAxios.get<IchorAPI.Products.Response>('products');
    return {
        props: {
            products
        }
    };
};
