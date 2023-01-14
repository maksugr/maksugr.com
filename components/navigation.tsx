import Link from 'next/link';
import { FC } from 'react';
import { useTheme } from 'next-themes';

import { DEFAULT_TITLE } from '../lib/constants';

export const Navigation: FC = () => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <nav className='relative flex text-xl pt-6 pb-24 before:w-5 before:h-5 before:bg-black before:mr-5'>
            <Link href='/'>
                <a className='text-black border-b-0 hover:bg-transparent hover:text-black leading-none font-bold mr-5'>
                    {DEFAULT_TITLE.toLowerCase()}
                </a>
            </Link>
            <Link href='/thegrasp'>
                <a className='text-black border-b-0 hover:bg-transparent hover:text-black leading-none font-bold mr-5'>
                    the grasp
                </a>
            </Link>
            <Link href='/dev'>
                <a className='text-black border-b-0 hover:bg-transparent hover:text-black leading-none font-bold mr-5'>
                    dev
                </a>
            </Link>
            <button
                type='button'
                className='border-4 border-black rounded-lg p-[6px] ml-auto'
                onClick={() =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
            ></button>
        </nav>
    );
};
