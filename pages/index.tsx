import React from 'react';
import Head from 'next/head';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Ichor Jewellery</title>
        <link rel='shortcut icon' href='/necklace.svg' />
        <meta property='og:url' content='https://www.ichorjewellery.com' />
        <meta property='og:title' content='Ichor Jewellery' />
        <meta property='og:image' content='/logo.png' />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content="Self expression is one's Ichor"
        />
      </Head>
      <div className='text-2xl font-medium flex justify-center my-2'>
        Hello!
      </div>
      <div className='flex justify-center my-1 text-sm lg:text-lg text-center mx-8'>
        Thanks for visiting Ichor Jewellery, we are so appreciative to have you
        here!
      </div>
      <div className='flex justify-center my-1 text-sm lg:text-lg text-center mx-8'>
        Unfortunately, we are still under construction, so please check back
        soon.
      </div>
      <div className='flex justify-center my-1 text-sm lg:text-lg text-center mx-8'>
        For now, please check out our Instagram!
      </div>
      <div className='text-2xl flex justify-center'>
        <a href='https://www.instagram.com/ichor.jewellery/'>
          <img className='h-12 w-12' src='instagram.svg' alt='Instagram' />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
