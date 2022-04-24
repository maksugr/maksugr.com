import { FC } from 'react';

import { Footer } from './footer';
import { Meta } from './meta';

interface ILayoutProps {
    readonly children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Meta />
            <div className='min-h-screen'>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};
