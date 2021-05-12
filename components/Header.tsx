import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  const [session, loading] = useSession();

  return (
    <nav className='flex p-5 justify-between bg-yellow-200'>
      <div className='flex'>
        <img
          src='/logo.png'
          alt='Ichor Jewellery'
          className='rounded w-12 h-12 mr-2'
        />
        <span className='text-3xl text-yellow-500 align-bottom'>
          Ichor Jewellery
        </span>
      </div>
      {session && (
        <div className='flex content-center'>
          <img
            className='rounded h-10 w-10'
            src={session.user.image}
            alt='User Profile Picture'
          />
          <button onClick={() => signOut()}>
            <img className='h-6 w-6 ml-3' src='logout.svg' alt='Logout' />
          </button>
        </div>
      )}
      {!session && (
        <Link href='/api/auth/signin'>
          <a data-active={isActive('/signup')}>
            <img className='h-8 w-8' src='login.svg' alt='Login' />
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Header;
