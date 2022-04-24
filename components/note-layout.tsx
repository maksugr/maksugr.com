import Head from 'next/head';
import { FC } from 'react';

import { Container } from '../components/container';
import { NoteBody } from '../components/note-body';
import { Navigation } from '../components/navigation';
import { NoteHeader } from '../components/note-header';
import { Layout } from '../components/layout';
import { DEFAULT_TITLE } from '../lib/constants';
import { INoteMeta } from '../interfaces/note-meta';

type INoteLayoutProps = {
    readonly meta: INoteMeta;
};

export const NoteLayout: FC<INoteLayoutProps> = ({ meta, children }) => {
    return (
        <Layout>
            <Container>
                <Navigation />
                <article className='mb-32'>
                    <Head>
                        <title>
                            {meta.title} | {DEFAULT_TITLE}
                        </title>
                    </Head>
                    <NoteHeader title={meta.title} />
                    <NoteBody>{children}</NoteBody>
                </article>
            </Container>
        </Layout>
    );
};
