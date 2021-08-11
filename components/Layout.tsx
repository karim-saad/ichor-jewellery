import { Banner, Footer, Navbar } from '.';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

const Layout: React.FC<Props> = ({ children, layoutProps }) => {
    const { title, description, imageUrl } = layoutProps;
    return <Flex minH='100vh' flexDir='column' justify='space-between'>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta property='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='shortcut icon' href='/static/necklace.svg' />
            <meta
                property='description' name='description'
                content={description}
            />
            <meta property='robots' name='robots' content='index, follow' />
            <meta property='og:title' name='og:title' content='Ichor Jewellery' />
            <meta
                property='og:description' name='og:description'
                content={description}
            />
            <meta property='og:image' name='og:image' content={`https://ichorjewellery.com/${imageUrl}`} />
        </Head>
        <Box>
            <Banner />
            <Navbar />
            <Box as='body'>
                {children}
            </Box>
        </Box>
        <Spacer />
        <Footer />
    </Flex>;
};

export default Layout;

interface Props {
    layoutProps: {
        title: string;
        description: string;
        imageUrl: string;
    };
}

