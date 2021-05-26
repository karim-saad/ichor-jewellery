import Head from 'next/head';
import React from 'react';

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
            <img
              src='/technics.svg'
              alt='Construction'
              className='w-6 h-6 ml-2'
            />
          </div>
          <nav className='flex p-4 justify-between bg-yellow-100'>
            <div className='flex items-center'>
              <img
                src='/logo.png'
                alt='Ichor Jewellery'
                className='rounded w-10 h-10 mr-3'
              />
              <span className='text-xl'>Ichor Jewellery</span>
            </div>
            <div className='flex'>
              <img src='/user.svg' alt='Account' className='w-7 h-7' />
              <img
                src='/shopping-cart.svg'
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
              <img
                src='/instagram-black.svg'
                alt='Instagram'
                className='w-6 h-6'
              />
            </a>
            <a href='https://www.etsy.com/au/shop/IchorJewellery'>
              <img src='/etsy-black.svg' alt='Etsy' className='w-6 h-6 ml-3' />
            </a>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Layout;
