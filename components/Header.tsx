import React from 'react';
import { useSession } from 'next-auth/client';

const Header: React.FC = () => {
  const [session, loading] = useSession();

  return (
    <nav className='flex p-5 justify-between bg-blue-300'>
      <div className='flex content-center'>
        <img className='h-8 w-8 mr-3' src='necklace.svg' alt='Necklace' />
        <span className='font-semibold font text-3xl text-blue-900'>ichor</span>
      </div>
      {session && <div>Hello {session.user.name}</div>}
      {!session && (
        <button className='rounded px-2 border-blue-900 bg-blue-400'>
          Log In
        </button>
      )}
    </nav>
  );
};

export default Header;
