import Head from 'next/head';
import { FC } from 'react';

import { Container } from '../../components/container';
import { Notes } from '../../components/notes';
import { Navigation } from '../../components/navigation';
import { Layout } from '../../components/layout';
import { DEFAULT_TITLE } from '../../lib/constants';

import { noteMetas } from './notes-meta';

const NotesPage: FC = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Notes | {DEFAULT_TITLE}</title>
                </Head>
                <Container>
                    <Navigation />
                    {noteMetas.length > 0 && <Notes noteMetas={noteMetas} />}
                </Container>
            </Layout>
        </>
    );
};

export default NotesPage;
