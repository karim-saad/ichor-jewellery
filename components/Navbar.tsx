import { LogoPic, ShoppingCartPic, UserPic } from '../public';
import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => {
    return <nav className='flex p-4 justify-between bg-yellow-100'>
        <div className='flex items-center'>
            <Image
                src={LogoPic}
                alt='Ichor Jewellery'
                height='36'
                width='36'
                className='rounded' />
            <span className='text-xl ml-3'>Ichor Jewellery</span>
        </div>
        <div className='flex'>
            <Image src={UserPic} alt='Account' height='36' width='36' />
            <Image
                src={ShoppingCartPic}
                alt='Cart'
                height='36'
                width='36'
                className='ml-3' />
        </div>
    </nav>;
};

export default Navbar;
