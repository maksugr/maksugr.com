import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { FC } from 'react';

import { Container } from '../../components/container';
import { NoteBody } from '../../components/note-body';
import { Navigation } from '../../components/navigation';
import { NoteHeader } from '../../components/note-header';
import { Layout } from '../../components/layout';
import { getNoteBySlug, getNotes } from '../../lib/api';
import { Title } from '../../components/title';
import { DEFAULT_TITLE } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import { INote } from '../../interfaces/note';
import { Header } from '../../components/header';

type INotePageProps = {
    readonly note: INote;
    readonly moreNotes: INote[];
};

const NotePage: FC<INotePageProps> = ({ note }) => {
    const router = useRouter();

    if (!router.isFallback && !note?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout>
            <Container>
                <Navigation />
                {router.isFallback ? (
                    <Header>
                        <Title>Loading…</Title>
                    </Header>
                ) : (
                    <>
                        <article className='mb-32'>
                            <Head>
                                <title>
                                    {note.title} | {DEFAULT_TITLE}
                                </title>
                            </Head>
                            <NoteHeader title={note.title} />
                            <NoteBody content={note.content} />
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    );
};

export default NotePage;

type Params = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const note = getNoteBySlug(params.slug, ['title', 'slug', 'content']);
    const content = await markdownToHtml(note.content || '');

    return {
        props: {
            note: {
                ...note,
                content
            }
        }
    };
}

export async function getStaticPaths() {
    const notes = getNotes(['slug']);

    return {
        paths: notes.map((note) => {
            return {
                params: {
                    slug: note.slug
                }
            };
        }),
        fallback: false
    };
}
