/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export const MDXComponents = {
    a: (props: any): ReactNode => <a {...props} />,
    // eslint-disable-next-line @next/next/no-img-element
    img: (props: any): ReactNode => <img alt={props.alt} {...props} />
};
