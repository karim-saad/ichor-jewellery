import Image from 'next/image';
import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components';
import { dynamoClient } from '../lib';


export default function LandingPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout layoutProps={{ title: 'Products' }}>
            {products.map(product => (
                <div key={product.id}>
                    {product.displayName}
                    {product.description}
                    <Image
                        src={`/${product.internalName}/thumbnail.jpg`}
                        alt={product.displayName}
                        height='56' width='56'
                    />
                </div>
            ))}
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
