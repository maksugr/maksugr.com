import { FC } from 'react';

import { IMetaProps, Meta } from './meta';

interface ILayoutProps {
    readonly meta?: IMetaProps;
}

export const Layout: FC<ILayoutProps> = ({ meta, children }) => {
    return (
        <>
            <Meta {...meta} />
            <div className='pb-16 min-h-screen bg-white'>
                <main>{children}</main>
            </div>
        </>
    );
};
