import { FC, Fragment } from 'react';

interface INavItem {
    readonly text: string;
    readonly href: string;
}

const navItems: INavItem[] = [
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
                I{`'`}d be happy to hear your thoughts.{' '}
                <a
                    href='https://github.com/maksugr/maksugr.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    Open an issue
                </a>{' '}
                to discuss the post. Subscribe 🖤
            </span>
            <hr className='h-0 border-t-4 border-primary mb-6' />
            <div className='flex'>
                {navItems.map(({ text, href }, index) => (
                    <Fragment key={text}>
                        <span className='mr-2'>
                            <a href={href} target='_blank' rel='noreferrer'>
                                {text}
                            </a>
                        </span>
                        {index !== navItems.length - 1 && (
                            <span className='mr-2'>/</span>
                        )}
                    </Fragment>
                ))}
            </div>
        </footer>
    );
};
