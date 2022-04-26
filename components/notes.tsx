import { FC } from 'react';

import { IPostMetadata } from '../interfaces/post-metadata';

import { Header } from './header';
import { NotePreview } from './note-preview';
import { Title } from './title';

interface INotesProps {
    readonly notesMetadata: IPostMetadata[];
}

export const Notes: FC<INotesProps> = ({ notesMetadata }) => {
    return (
        <section>
            <Header>
                <Title>Notes</Title>
            </Header>
            <div className='flex flex-col'>
                {notesMetadata.map((noteMetadata) => (
                    <NotePreview
                        key={noteMetadata.slug}
                        title={noteMetadata.title}
                        slug={noteMetadata.slug}
                    />
                ))}
            </div>
        </section>
    );
};
