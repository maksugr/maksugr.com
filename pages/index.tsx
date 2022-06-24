import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Container } from '../components/container';
import { Navigation } from '../components/navigation';
import { Layout } from '../components/layout';
import { generateMainFeeds } from '../lib/feeds';
import { getContents } from '../lib/content';
import { ContentTypeEnum } from '../enums/content-type';
import { IContentMetadata } from '../interfaces/content-metadata';
import { Content } from '../components/content';
import { Footer } from '../components/footer';

interface IIndexPageProps {
    readonly postsMetadatas: IContentMetadata[];
}

const IndexPage: FC<IIndexPageProps> = ({ postsMetadatas }) => {
    return (
        <Layout>
            <Container>
                <Navigation />
                {postsMetadatas.length > 0 && (
                    <Content
                        type={ContentTypeEnum.POSTS}
                        metadatas={postsMetadatas}
                    />
                )}
                <Footer />
            </Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    generateMainFeeds();

    const posts = await getContents(ContentTypeEnum.POSTS);
    const postsMetadatas = posts.map((post) => post.metadata);

    return {
        props: {
            postsMetadatas
        }
    };
};

export default IndexPage;
