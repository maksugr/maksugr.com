import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IFigcaptionProps {}

export const Figcaption: FC<IFigcaptionProps> = ({ children }) => {
    return (
        <figcaption className='-mt-6 mb-6 text-center italic text-sm text-gray-500'>
            {children}
        </figcaption>
    );
};
