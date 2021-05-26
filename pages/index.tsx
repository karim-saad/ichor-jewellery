import React from 'react';
import Layout from '../components/Layout';

const LandingPage: React.FC = () => {
  return (
    <Layout layoutProps={{ title: 'Ichor Jewellery' }}>
      <div>
        <div className='text-2xl font-medium flex justify-center my-2'>
          Hello!
        </div>
        <div className='flex justify-center my-1 text-sm lg:text-lg text-center mx-8'>
          Thanks for visiting Ichor Jewellery, we are so appreciative to have
          you here!
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
            <img
              className='h-16 w-16 mx-4'
              src='/instagram.svg'
              alt='Instagram'
            />
          </a>
          <a href='https://www.etsy.com/au/shop/IchorJewellery'>
            <img className='h-16 w-16 mx-4' src='/etsy.svg' alt='Etsy' />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
