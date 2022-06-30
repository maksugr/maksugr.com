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

const PostPage: FC<IContent> = ({ mdxSource, metadata }) => {
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
        ContentTypeEnum.POSTS,
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
    const posts = getContentFiles(ContentTypeEnum.POSTS);

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false
    };
};

export default PostPage;
