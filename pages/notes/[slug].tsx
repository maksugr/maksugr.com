import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';

import { Container } from '../../components/container';
import { Layout } from '../../components/layout';
import { Navigation } from '../../components/navigation';
import { NoteBody } from '../../components/note-body';
import { NoteHeader } from '../../components/note-header';
import { IPost } from '../../interfaces/post';
import { DEFAULT_TITLE } from '../../lib/constants';
import { getPost, getPostFiles } from '../../lib/posts';

const NotePage: FC<IPost> = ({ mdxSource, metadata }) => {
    return (
        <Layout>
            <Head>
                <title>
                    {metadata.title} | {DEFAULT_TITLE}
                </title>
            </Head>
            <Container>
                <Navigation />
                <NoteHeader title={metadata.title} />
                <NoteBody mdxSource={mdxSource} />
            </Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { mdxSource, metadata } = await getPost(
        'notes',
        params?.slug as string
    );
    return {
        props: {
            mdxSource,
            metadata
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getPostFiles('notes');

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false
    };
};

export default NotePage;
