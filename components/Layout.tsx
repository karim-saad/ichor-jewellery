import { EtsyBlackPic, InstagramBlackPic, TechnicsPic } from '../public';
import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components';
import React from 'react';


interface Props {
    layoutProps: {
        title: string;
    };
}

const Layout: React.FC<Props> = ({ children, layoutProps }) => {
    const { title } = layoutProps;
    return (
        <>
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
                    content="Self expression is one's Ichor. Bespoke jewellery made for all."
                />
                <meta property='og:image' content='https://ichorjewellery.com/logo.png' />
            </Head>
            <body className='flex flex-col min-h-screen'>
                <header>
                    <div className='flex p-1 justify-center bg-yellow-200'>
                        Under Construction!
                        <div className='ml-2'>
                            <Image
                                src={TechnicsPic}
                                alt='Construction'
                                height='20'
                                width='20'
                            />
                        </div>
                    </div>
                    <Navbar />
                </header>
                <main className='flex-grow'>{children}</main>
                <footer className='relative flex justify-between p-3 bg-yellow-100'>
                    Ichor Jewellery 2021
                    <div className='flex'>
                        <a href='https://www.instagram.com/ichor.jewellery/'>
                            <Image
                                src={InstagramBlackPic}
                                alt='Instagram'
                                height='24'
                                width='24'
                            />
                        </a>
                        <a className='ml-3' href='https://www.etsy.com/au/shop/IchorJewellery'>
                            <Image
                                src={EtsyBlackPic}
                                alt='Etsy'
                                height='24'
                                width='24'
                            />
                        </a>
                    </div>
                </footer>
            </body>
        </>
    );
};

export default Layout;
