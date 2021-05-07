import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession } from 'next-auth/client';

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
      {session && <div>Hello {session.user.name}</div>}
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
