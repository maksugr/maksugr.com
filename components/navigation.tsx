import Link from 'next/link';
import { FC } from 'react';

import { AUTHOR_NAME } from '../lib/constants';

export const Navigation: FC = () => {
    return (
        <nav className='relative flex text-xl mt-6 mb-24 before:w-5 before:h-5 before:bg-black before:mr-2'>
            <Link href='/'>
                <a className='text-black border-b-0 hover:bg-transparent hover:text-black leading-none font-bold'>
                    {AUTHOR_NAME.toLowerCase()}
                </a>
            </Link>
        </nav>
    );
};
