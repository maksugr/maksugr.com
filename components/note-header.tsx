import { FC } from 'react';

import { Title } from './title';
import { Header } from './header';

interface INoteHeaderProps {
    readonly title: string;
}

export const NoteHeader: FC<INoteHeaderProps> = ({ title }) => {
    return (
        <Header>
            <Title>{title}</Title>
        </Header>
    );
};
