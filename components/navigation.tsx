import Link from 'next/link';
import { FC } from 'react';

interface INavItem {
    readonly text: string;
    readonly href: string;
}

const navItems: INavItem[] = [
    {
        text: 'roman ponomarev',
        href: '/'
    },
    { text: 'notes', href: '/notes' }
];

export const Navigation: FC = () => {
    return (
        <nav className='flex text-sm md:text-xl font-bold mb-24 mt-4'>
            {navItems.map(({ text, href }) => (
                <h2 key={text} className='mr-8'>
                    <Link href={href}>
                        <a className='hover:text-amber-300 transition-colors duration-75'>
                            {text}
                        </a>
                    </Link>
                </h2>
            ))}
        </nav>
    );
};
