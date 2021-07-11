import { Banner, Footer, Navbar } from '.';
import Head from 'next/head';
import React from 'react';


interface Props {
    layoutProps: {
        title: string;
    };
}

const Layout: React.FC<Props> = ({ children, layoutProps }) => {
    const { title } = layoutProps;
    return <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta property='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='shortcut icon' href='/static/necklace.svg' />
            <meta
                property='description'
                content="Bespoke jewellery made for all. Self expression is one's Ichor. Sydney, Australia."
            />
            <meta property='robots' content='index, follow' />
            <meta property='og:title' content='Ichor Jewellery' />
            <meta
                property='og:description'
                content="Bespoke jewellery made for all. Self expression is one's Ichor. Sydney, Australia."
            />
            <meta property='og:image' content='https://ichorjewellery.com/logo.png' />
        </Head>
        <Banner />
        <Navbar />
        <main className='flex-grow px-1 py-2'>{children}</main>
        <Footer />
    </>;
};

export default Layout;
