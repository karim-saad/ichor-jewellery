import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { EtsyBlackPic, InstagramBlackPic, LogoPic, ShoppingCartPic, TechnicsPic, UserPic } from '../public';

interface Props {
  layoutProps: {
    title: string;
  };
}

const Layout: React.FC<Props> = ({ children, layoutProps }) => {
  return (
    <>
      <Head>
        <title>{layoutProps.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='/necklace.svg' />
        <meta
          name='description'
          content="Bespoke jewellery made for all. Self expression is one's Ichor. Sydney, Australia."
        />
        <meta name='robots' content='index, follow' />
        <meta name='og:title' content='Ichor Jewellery' />
        <meta
          name='og:description'
          content="Self expression is one's Ichor. Bespoke jewellery made for all."
        />
        <meta name='og:image' content='https://ichorjewellery.com/logo.png' />
      </Head>
      <body className='flex flex-col min-h-screen'>
        <header>
          <div className='flex p-2 justify-center bg-yellow-200'>
            Under Construction!
            <Image
              src={TechnicsPic}
              alt='Construction'
              className='w-6 h-6 ml-2'
            />
          </div>
          <nav className='flex p-4 justify-between bg-yellow-100'>
            <div className='flex items-center'>
              <Image
                src={LogoPic}
                alt='Ichor Jewellery'
                className='rounded w-10 h-10 mr-3'
              />
              <span className='text-xl'>Ichor Jewellery</span>
            </div>
            <div className='flex'>
              <Image src={UserPic} alt='Account' className='w-7 h-7' />
              <Image
                src={ShoppingCartPic}
                alt='Cart'
                className='w-8 h-8 ml-3'
              />
            </div>
          </nav>
        </header>
        <main className='flex-grow'>{children}</main>
        <footer className='relative flex justify-between p-3 bg-yellow-100'>
          Ichor Jewellery 2021
          <div className='flex'>
            <a href='https://www.instagram.com/ichor.jewellery/'>
              <Image
                src={InstagramBlackPic}
                alt='Instagram'
                className='w-6 h-6'
              />
            </a>
            <a href='https://www.etsy.com/au/shop/IchorJewellery'>
              <Image src={EtsyBlackPic} alt='Etsy' className='w-6 h-6 ml-3' />
            </a>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Layout;
