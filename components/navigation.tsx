import Link from 'next/link';
import { FC } from 'react';

import { DEFAULT_TITLE } from '../lib/constants';

export const Navigation: FC = () => {
    return (
        <nav className='relative flex text-xl mt-6 mb-24 before:w-5 before:h-5 before:bg-primary before:mr-5'>
            <Link href='/'>
                <a className='text-primary border-b-0 hover:bg-transparent hover:text-primary leading-none font-bold mr-5'>
                    {DEFAULT_TITLE.toLowerCase()}
                </a>
            </Link>
            <Link href='/thegrasp'>
                <a className='text-primary border-b-0 hover:bg-transparent hover:text-primary leading-none font-bold mr-5'>
                    the grasp
                </a>
            </Link>
            <Link href='/dev'>
                <a className='text-primary border-b-0 hover:bg-transparent hover:text-primary leading-none font-bold mr-5'>
                    dev
                </a>
            </Link>
        </nav>
    );
};
