import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { Container } from '../../components/container';
import { Layout } from '../../components/layout';
import { Navigation } from '../../components/navigation';
import { ContentBody } from '../../components/content-body';
import { ContentHeader } from '../../components/content-header';
import { IContent } from '../../interfaces/content';
import { DEFAULT_TITLE } from '../../lib/constants';
import { getContent, getContentFiles } from '../../lib/content';
import { ContentTypeEnum } from '../../enums/content-type';
import { Footer } from '../../components/footer';

const NotePage: FC<IContent> = ({ mdxSource, metadata }) => {
    return (
        <Layout
            meta={{
                title: `${metadata.title} | ${DEFAULT_TITLE}`,
                description: metadata.summary,
                type: 'article'
            }}
        >
            <Container>
                <Navigation />
                <ContentHeader
                    title={metadata.title}
                    summary={metadata.summary}
                />
                <ContentBody mdxSource={mdxSource} />
                <Footer />
            </Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { mdxSource, metadata } = await getContent(
        ContentTypeEnum.NOTES,
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
    const notes = getContentFiles(ContentTypeEnum.NOTES);

    return {
        paths: notes.map((note) => ({
            params: {
                slug: note.slug
            }
        })),
        fallback: false
    };
};

export default NotePage;
