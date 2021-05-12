import React from 'react';
import Head from 'next/head';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Ichor Jewellery</title>
        <link rel='shortcut icon' href='/necklace.svg' />
        <meta name='og:url' content='https://www.ichorjewellery.com' />
        <meta name='og:title' content='Ichor Jewellery' />
        <meta name='og:image' content='/logo.png' />
        <meta name='og:type' content='website' />
        <meta name='og:description' content="Self expression is one's Ichor" />
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
        For now, please check out our Instagram and Etsy!
      </div>
      <div className='text-2xl mt-2 flex justify-center'>
        <a href='https://www.instagram.com/ichor.jewellery/'>
          <img
            className='h-16 w-16 mx-2'
            src='/instagram.svg'
            alt='Instagram'
          />
        </a>
        <a href='https://www.etsy.com/au/shop/IchorJewellery'>
          <img className='h-16 w-16 mx-2' src='/etsy.svg' alt='Etsy' />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
