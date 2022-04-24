import Head from 'next/head';
import { FC } from 'react';

import { Container } from '../../components/container';
import { Notes } from '../../components/notes';
import { Navigation } from '../../components/navigation';
import { Layout } from '../../components/layout';
import { getNotes } from '../../lib/api';
import { INote } from '../../interfaces/note';
import { DEFAULT_TITLE } from '../../lib/constants';

interface INotesPage {
    readonly notes: INote[];
}

const NotesPage: FC<INotesPage> = ({ notes }) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Notes | {DEFAULT_TITLE}</title>
                </Head>
                <Container>
                    <Navigation />
                    {notes.length > 0 && <Notes notes={notes} />}
                </Container>
            </Layout>
        </>
    );
};

export default NotesPage;

export const getStaticProps = async () => {
    const notes = getNotes(['title', 'slug']);

    return {
        props: { notes }
    };
};
