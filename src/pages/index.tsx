import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Layout, ListingCard } from '../components';
import { SimpleGrid } from '@chakra-ui/react';
import { ListingWithImages, Shop } from '../typings';
import { EtsyApi, getEnvironmentVariable } from '../lib';

export default function LandingPage({ listingsWithImages, shop }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const layoutProps = {
        title: 'Ichor Jewellery',
        description: shop.title,
        imageUrl: 'logo_black.png'
    };

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
                listingsWithImages
                    .sort(listing => listing.featuredRank)
                    .map(listing => <ListingCard key={listing.listingId} {...listing} />)
            }
        </SimpleGrid>
    </Layout>;
}

export const getServerSideProps: GetServerSideProps<{ listingsWithImages: ListingWithImages[], shop: Shop }> = async () => {
    const etsyApi = new EtsyApi(getEnvironmentVariable('ETSY_SHOP_ID'), getEnvironmentVariable('ETSY_API_KEY'));
    return {
        props: {
            listingsWithImages: await etsyApi.getListingsWithImages(),
            shop: await etsyApi.getShop()
        }
    };
};
