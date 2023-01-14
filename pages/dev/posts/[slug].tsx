import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { Container } from '../../../components/container';
import { Layout } from '../../../components/layout';
import { Navigation } from '../../../components/navigation';
import { ContentBody } from '../../../components/content-body';
import { ContentHeader } from '../../../components/content-header';
import { IContent } from '../../../interfaces/content';
import { DEFAULT_TITLE } from '../../../lib/constants';
import { getContent, getContentFiles } from '../../../lib/content';
import { ContentTypeEnum } from '../../../enums/content-type';
import { Footer } from '../../../components/footer';

const DevPostPage: FC<IContent> = ({ mdxSource, metadata }) => {
    const { title, summary } = metadata;

    return (
        <Layout
            meta={{
                title: `${title} | ${DEFAULT_TITLE}`,
                description: summary,
                type: 'article'
            }}
        >
            <Container>
                <Navigation />
                <ContentHeader title={title} summary={summary} />
                <ContentBody mdxSource={mdxSource} />
                <Footer />
            </Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { mdxSource, metadata } = await getContent(
        ContentTypeEnum.DEV,
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
    const devPosts = getContentFiles(ContentTypeEnum.DEV);

    return {
        paths: devPosts.map((devPost) => ({
            params: {
                slug: devPost.slug
            }
        })),
        fallback: false
    };
};

export default DevPostPage;
