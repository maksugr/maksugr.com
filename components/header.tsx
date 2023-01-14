import Link from 'next/link';
import { FC, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import { DEFAULT_TITLE } from '../lib/constants';
import { INavigrationItem } from '../interfaces/navigation-item';

const navigationItems: INavigrationItem[] = [
    { text: DEFAULT_TITLE.toLowerCase(), href: '/' },
    {
        text: 'the grasp',
        href: '/thegrasp'
    },
    { text: 'dev', href: '/dev' }
];

export const Header: FC = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const { pathname } = useRouter();

    const preparedNavigationItems = useMemo(() => {
        return navigationItems.map((navigationItem) => ({
            ...navigationItem,
            isActive:
                navigationItem.href === '/'
                    ? navigationItem.href === pathname
                    : pathname.includes(navigationItem.href)
        }));
    }, [pathname]);

    return (
        <header className='flex items-center pt-6 pb-24'>
            <nav className='flex items-center md:text-xl before:w-5 before:h-5 before:bg-black before:mr-5'>
                {preparedNavigationItems.map(({ text, href, isActive }) => (
                    <Link href={href} key={text}>
                        <a
                            className={`${
                                isActive
                                    ? 'text-red hover:text-red'
                                    : 'text-black hover:text-black'
                            } border-b-0 hover:bg-transparent leading-none font-bold mr-5`}
                        >
                            {text}
                        </a>
                    </Link>
                ))}
            </nav>
            <button
                type='button'
                className='border-4 border-black rounded-lg p-[6px] ml-auto'
                onClick={() =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
            ></button>
        </header>
    );
};
