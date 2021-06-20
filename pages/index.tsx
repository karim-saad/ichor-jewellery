import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';

import { EtsyPic, InstagramPic } from '../public';

const LandingPage: React.FC = () => {
  return (
    <Layout layoutProps={{ title: 'Ichor Jewellery' }}>
      <div>
        <h1 className='text-2xl font-medium flex justify-center my-2'>
          Ichor Jewellery
        </h1>
        <div className='flex justify-center my-1 text-sm lg:text-lg text-center mx-8'>
          Thanks for our page, we are so appreciative to have you here!
        </div>
        <div className='flex justify-center my-1 text-sm lg:text-lg text-center mx-8'>
          Unfortunately, we are still under construction, so please check back
          soon.
        </div>
        <div className='flex justify-center my-1 text-sm lg:text-lg text-center mx-8'>
          For now, please check out our Instagram and Etsy!
        </div>
        <div className='text-2xl mt-4 flex justify-center'>
          <a href='https://www.instagram.com/ichor.jewellery/'>
            <Image
              className='h-16 w-16 mx-4'
              src={InstagramPic}
              alt='Instagram'
            />
          </a>
          <a href='https://www.etsy.com/au/shop/IchorJewellery'>
            <Image className='h-16 w-16 mx-4' src={EtsyPic} alt='Etsy' />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
