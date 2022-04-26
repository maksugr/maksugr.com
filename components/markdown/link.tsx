import { FC } from 'react';

export interface ILinkProps {
    readonly href: string;
    readonly target?: string;
}

export const Link: FC<ILinkProps> = (props) => {
    const isTargetBlank =
        props.href.startsWith('https') || props.href.startsWith('http');

    return (
        <a
            {...props}
            target={isTargetBlank ? '_blank' : props.target || undefined}
        >
            {props.children}
        </a>
    );
};
