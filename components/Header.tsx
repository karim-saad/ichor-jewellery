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
    <nav className='flex p-5 justify-between bg-blue-300'>
      <div className='flex content-center'>
        <img className='h-8 w-8 mr-3' src='necklace.svg' alt='Necklace' />
        <span className='font-semibold font text-3xl text-blue-900'>ichor</span>
      </div>
      {session && (
        <div className='flex content-center'>
          <div className='content-center m-0'>
            Hello {session.user.name.split(' ')[0]}
          </div>
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