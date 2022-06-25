import Link from 'next/link';
import { FC } from 'react';

import { DEFAULT_TITLE } from '../lib/constants';

export const Navigation: FC = () => {
    return (
        <nav className='relative flex text-xl mt-6 mb-24 before:w-5 before:h-5 before:bg-black before:mr-2'>
            <Link href='/'>
                <a className='text-black border-b-0 hover:bg-transparent hover:text-black leading-none font-bold'>
                    {DEFAULT_TITLE.toLowerCase()}
                </a>
            </Link>
        </nav>
    );
};
