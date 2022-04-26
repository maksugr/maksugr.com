/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

import { Figcaption, IFigcaptionProps } from './figcaption';
import { IImageProps, Image } from './image';

export const MDXComponents = {
    a: (props: any): ReactNode => <a {...props} />,
    img: (props: IImageProps) => <Image {...props} alt={props.alt} />,
    figcaption: (props: IFigcaptionProps) => <Figcaption {...props} />
};
