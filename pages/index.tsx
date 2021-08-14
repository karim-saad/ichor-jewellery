import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IchorAPI, Product } from '../typings';
import { Layout, ProductCard } from '../components';
import { SimpleGrid } from '@chakra-ui/react';
import { ichorAxios } from '../lib';

const layoutProps = {
    title: 'Ichor Jewellery',
    description: 'Bespoke jewellery made for all. Self expression is one\'s Ichor. Sydney, Australia.',
    imageUrl: 'static/logo.png'
};

export default function LandingPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout layoutProps={layoutProps}>
        <SimpleGrid
            minChildWidth={[140, 280]}
            justifyItems='center'
            px={[4, null, 8]}
            py={[2, null, 4]}
            spacingX={1}
            spacingY={4}
        >
            {
                products
                    .sort(sortFunctions.alphabetical)
                    .map(product => <ProductCard key={product.id} product={product} />)
            }
        </SimpleGrid>
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

const sortFunctions = {
    'alphabetical': (a: Product, b: Product) => { return (a.name > b.name) ? 1 : -1; }
};
