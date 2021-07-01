import Image from 'next/image';
import { LogoPic } from '../public';
import React from 'react';

const Navbar: React.FC = () => {
    return <nav className='flex p-3 justify-between bg-yellow-100'>
        <div className='flex items-center'>
            <Image
                src={LogoPic}
                alt='Ichor Jewellery'
                height='36' width='36'
                className='rounded' />
            <span className='text-xl ml-3'>Ichor Jewellery</span>
        </div>
    </nav>;
};

export default Navbar;
