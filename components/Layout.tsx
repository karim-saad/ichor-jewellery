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
      </Head>
      <body className='flex flex-col min-h-screen'>
        <header>
          <nav className='flex p-5 justify-between bg-yellow-100'>
            <div className='flex items-center'>
              <img
                src='/logo.png'
                alt='Ichor Jewellery'
                className='rounded w-12 h-12 mr-3'
              />
              <span className='text-2xl'>Ichor Jewellery</span>
            </div>
            <div className='flex'>
              <img src='/user.svg' alt='Account' className='w-10 h-10' />
              <img
                src='/shopping-cart.svg'
                alt='Cart'
                className='w-11 h-11 ml-3'
              />
            </div>
          </nav>
        </header>
        <main className='flex-grow'>{children}</main>
        <footer className='relative pb-5'>Ichor Jewellery</footer>
      </body>
    </>
  );
};

export default Layout;
