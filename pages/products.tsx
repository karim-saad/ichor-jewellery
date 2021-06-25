import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components';
import { Product } from '../typings';
import fetch from 'node-fetch';

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
    const res = await fetch('https://ichorjewellery.com/api/products');
    const products: Product[] = await res.json();

    return {
        props: {
            products
        }
    };
};
