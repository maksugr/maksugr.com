import { FC } from 'react';

import { Meta } from './meta';

interface ILayoutProps {
    readonly children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Meta />
            <div className='min-h-screen text-gray-800'>
                <main>{children}</main>
            </div>
        </>
    );
};
