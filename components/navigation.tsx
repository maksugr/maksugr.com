import Link from 'next/link';
import { FC } from 'react';

export const Navigation: FC = () => {
    return (
        <nav className='flex text-sm md:text-xl font-bold mb-16 mt-4'>
            <h2 className='mr-8'>
                <Link href='/'>
                    <a className='hover:opacity-70'>Roman Ponomarev</a>
                </Link>
            </h2>
            <h2>
                <Link href='/notes'>
                    <a className='hover:opacity-70'>Notes</a>
                </Link>
            </h2>
        </nav>
    );
};
