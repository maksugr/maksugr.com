import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { Container } from '../../../components/container';
import { Layout } from '../../../components/layout';
import { Header } from '../../../components/header';
import { ContentBody } from '../../../components/content-body';
import { ContentHeader } from '../../../components/content-header';
import { IContent } from '../../../interfaces/content';
import { DEFAULT_TITLE } from '../../../lib/constants';
import { getContent, getContentFiles } from '../../../lib/content';
import { ContentTypeEnum } from '../../../enums/content-type';
import { Footer } from '../../../components/footer';
import { ScrollProgress } from '../../../components/scroll-progress';

const TheGraspPostPage: FC<IContent> = ({ mdxSource, metadata }) => {
    const { title, summary } = metadata;

    return (
        <Layout
            meta={{
                title: `${title} | ${DEFAULT_TITLE}`,
                description: summary,
                type: 'article'
            }}
        >
            <ScrollProgress />
            <Container>
                <Header />
                <ContentHeader title={title} summary={summary} />
                <ContentBody mdxSource={mdxSource} />
                <Footer />
            </Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { mdxSource, metadata } = await getContent(
        ContentTypeEnum.THE_GRASP,
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
    const theGraspPosts = getContentFiles(ContentTypeEnum.THE_GRASP);

    return {
        paths: theGraspPosts.map((theGraspPost) => ({
            params: {
                slug: theGraspPost.slug
            }
        })),
        fallback: false
    };
};

export default TheGraspPostPage;
