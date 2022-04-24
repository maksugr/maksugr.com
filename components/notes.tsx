import { FC } from 'react';

import { INote } from '../interfaces/note';

import { Header } from './header';
import { NotePreview } from './note-preview';
import { Title } from './title';

interface INotesProps {
    readonly notes: INote[];
}

export const Notes: FC<INotesProps> = ({ notes }) => {
    return (
        <section>
            <Header>
                <Title>Notes</Title>
            </Header>
            <div className='flex flex-col'>
                {notes.map((note) => (
                    <NotePreview
                        key={note.slug}
                        title={note.title}
                        slug={note.slug}
                    />
                ))}
            </div>
        </section>
    );
};
