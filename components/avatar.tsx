import { FC } from 'react';

interface IAvatarProps {
    readonly name: string;
    readonly picture: string;
}

export const Avatar: FC<IAvatarProps> = ({ name, picture }) => {
    return (
        <div className='flex items-center'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={picture}
                className='w-12 h-12 rounded-full mr-4'
                alt={name}
            />
            <div className='text-xl font-bold'>{name}</div>
        </div>
    );
};
