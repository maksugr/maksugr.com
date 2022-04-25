import Head from 'next/head';
import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Container } from '../../components/container';
import { Notes } from '../../components/notes';
import { Navigation } from '../../components/navigation';
import { Layout } from '../../components/layout';
import { DEFAULT_TITLE } from '../../lib/constants';
import { getPosts } from '../../lib/posts';
import { IPostMetadata } from '../../interfaces/post-metadata';

interface INotesPageProps {
    readonly notesMetadata: IPostMetadata[];
}

const NotesPage: FC<INotesPageProps> = ({ notesMetadata }) => {
    return (
        <Layout>
            <Head>
                <title>Notes | {DEFAULT_TITLE}</title>
            </Head>
            <Container>
                <Navigation />
                {notesMetadata.length > 0 && (
                    <Notes notesMetadata={notesMetadata} />
                )}
            </Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const notes = await getPosts('notes');
    const notesMetadata = notes.map((note) => note.metadata);

    return {
        props: {
            notesMetadata
        }
    };
};

export default NotesPage;
