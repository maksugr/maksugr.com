import { FC } from 'react';

import { Alert } from './alert';
import { Footer } from './footer';
import { Meta } from './meta';

interface ILayoutProps {
    readonly preview?: boolean;
    readonly children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ preview, children }) => {
    return (
        <>
            <Meta />
            <div className='min-h-screen'>
                <Alert preview={preview} />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};
