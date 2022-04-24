import { FC } from 'react';

import { INoteMeta } from '../interfaces/note-meta';

import { Header } from './header';
import { NotePreview } from './note-preview';
import { Title } from './title';

interface INotesProps {
    readonly noteMetas: INoteMeta[];
}

export const Notes: FC<INotesProps> = ({ noteMetas }) => {
    return (
        <section>
            <Header>
                <Title>notes</Title>
            </Header>
            <div className='flex flex-col'>
                {noteMetas.map((noteMeta) => (
                    <NotePreview
                        key={noteMeta.slug}
                        title={noteMeta.title}
                        slug={noteMeta.slug}
                    />
                ))}
            </div>
        </section>
    );
};
