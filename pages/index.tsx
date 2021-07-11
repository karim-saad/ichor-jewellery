import { Layout, ProductCard } from '../components';
import { InferGetStaticPropsType } from 'next';
import { dynamoClient } from '../lib';

export default function LandingPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout layoutProps={{ title: 'Ichor Jewellery' }}>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
    </Layout>;
}

export const getStaticProps = async () => {
    return {
        props: {
            products: await dynamoClient.getProducts()
        }
    };
};
