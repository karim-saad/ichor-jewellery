import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components';
import { Product } from '../typings';
import useSWR from 'swr';

export default function ProductPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout layoutProps={{ title: 'Products' }}>
            {products.map(product => (
                product.displayName
            ))}
        </Layout>
    );
}

export const getStaticProps = async () => {
    const { data: products } = useSWR<Product[]>('/api/products');

    return {
        props: {
            products
        }
    };
};
