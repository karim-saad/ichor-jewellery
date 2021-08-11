import { Box, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { IchorAPI, Product } from '../../typings';
import Image from 'next/image';
import { Layout } from '../../components';
import { ichorAxios } from '../../lib';

export default function ProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    const { description, handle, name, price } = product;
    const layoutProps = {
        title: `Ichor Jewellery | ${name}`,
        description,
        imageUrl: `${handle}/0.jpg`
    };
    const imageDimension = useBreakpointValue([300, 500]);

    return <Layout layoutProps={layoutProps}>
        <Stack direction={['column', 'row']} p={[4, null, 8]} spacing='4'>
            <Image
                src={`/${handle}/0.jpg`}
                alt={name}
                height={imageDimension || 500}
                width={imageDimension || 500}
            />
            <Box>
                <Text fontSize={['lg', 'xl']} fontWeight='semibold'>
                    {name}
                </Text>
                <Text>
                    {`$${price} AUD`}
                </Text>
                <Text>
                    {description}
                </Text>
            </Box>
        </Stack>
    </Layout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: { products } } = await ichorAxios.get<IchorAPI.Products.Response>('products');
    return {
        paths: products.map(product => ({
            params: { name: product.handle }
        })),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<{ product: Product }, { name: string }> = async ({ params }) => {
    const { data: { product } } = await ichorAxios.get<IchorAPI.Product.Response>(`product/${params?.name}`);
    return {
        props: {
            product
        }
    };
};
