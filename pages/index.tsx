import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IchorAPI, Product } from '../typings';
import { Layout, ProductCard } from '../components';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { ichorAxios } from '../lib';

const layoutProps = {
    title: 'Ichor Jewellery',
    description: 'Bespoke jewellery made for all. Self expression is one\'s Ichor. Sydney, Australia.',
    imageUrl: 'static/logo.png'
};

export default function LandingPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout layoutProps={layoutProps}>
        <Wrap
            justify='center'
            my={[2, null, 4]}
            spacing={[6, null, 8]}
        >
            {products.sort((a, b) => (a.displayName > b.displayName) ? 1 : -1).map(product =>
                <WrapItem key={product.id}>
                    <ProductCard product={product} />
                </WrapItem>
            )}
        </Wrap>
    </Layout>;
}

export const getStaticProps: GetStaticProps<{ products: Product[] }> = async () => {
    const { data: { products } } = await ichorAxios.get<IchorAPI.Products.Response>('products');
    return {
        props: {
            products
        }
    };
};
