import Image from 'next/image';
import React from 'react';
import { LogoPic, ShoppingCartPic, UserPic } from '../public';

const Navbar: React.FC = () => {
    return <nav className='flex p-4 justify-between bg-yellow-100'>
        <div className='flex items-center'>
            <Image
                src={LogoPic}
                alt='Ichor Jewellery'
                height='10'
                width='10'
                className='rounded mr-3' />
            <span className='text-xl'>Ichor Jewellery</span>
        </div>
        <div className='flex'>
            <Image src={UserPic} alt='Account' className='w-7 h-7' />
            <Image
                src={ShoppingCartPic}
                alt='Cart'
                height='8'
                width='8'
                className='ml-3' />
        </div>
    </nav>;
}

export default Navbar;
