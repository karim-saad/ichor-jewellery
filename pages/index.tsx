import Head from 'next/head';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Ichor</title>
        <link rel='shortcut icon' href='/necklace.svg' />
        <meta property='og:title' content='Ichor' key='title' />
      </Head>
      <div className='text-2xl font-medium flex justify-center my-2'>
        Hello!
      </div>
      <div className='flex justify-center my-1'>
        Thanks for visiting Ichor Jewellery, we are so appreciative to have you
        here!
      </div>
      <div className='flex justify-center my-1'>
        Unfortunately, we are still under construction, so please check back
        soon.
      </div>
      <div className='flex justify-center my-1'>
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
