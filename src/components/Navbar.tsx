import { LinkBox, LinkOverlay, VisuallyHidden } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return <LinkBox
        as='nav'
        d='flex'
        justifyContent='center'
        bgColor='brand.100'
        px={[4, null, 8]}
        py={2}
    >
        <Image
            src='/logo_text_black.png'
            alt='Ichor Jewellery'
            height={64}
            width={240}
        />
        <Link href='/' passHref>
            <LinkOverlay>
                <VisuallyHidden>Home</VisuallyHidden>
            </LinkOverlay>
        </Link>
    </LinkBox>;
};

export default Navbar;
