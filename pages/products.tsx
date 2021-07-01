import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components';
import { dynamoClient } from '../lib';

export default function ProductPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout layoutProps={{ title: 'Products' }}>
            {products.map(product => product.displayName)}
        </Layout>
    );
}

export const getStaticProps = async () => {
    return {
        props: {
            products: await dynamoClient.getProducts()
        }
    };
};
