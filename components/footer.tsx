import { FC, Fragment } from 'react';

import { INavigrationItem } from '../interfaces/navigation-item';

const navigationItems: INavigrationItem[] = [
    { text: 'twitter', href: 'https://twitter.com/maksugr' },
    {
        text: 'rss',
        href: '/feeds/rss.xml'
    },
    { text: 'github', href: 'https://github.com/maksugr' },
    { text: 'maksugr@gmail.com', href: 'mailto:maksugr@gmail.com' }
];

export const Footer: FC = () => {
    return (
        <footer className='mt-24'>
            <span className='block mb-6 font-bold'>
                I{`'`}d be happy to hear your thoughts. Feel free to text me.
                Subscribe 🖤
            </span>
            <hr className='h-0 border-t-4 border-black mb-6' />
            <div className='flex'>
                {navigationItems.map(({ text, href }, index) => (
                    <Fragment key={text}>
                        <span className='mr-2'>
                            <a href={href} target='_blank' rel='noreferrer'>
                                {text}
                            </a>
                        </span>
                        {index !== navigationItems.length - 1 && (
                            <span className='mr-2'>/</span>
                        )}
                    </Fragment>
                ))}
            </div>
        </footer>
    );
};
