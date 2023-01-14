import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { generateMainFeeds } from '../../lib/feeds';
import { getContents } from '../../lib/content';
import { ContentTypeEnum } from '../../enums/content-type';
import { IContentMetadata } from '../../interfaces/content-metadata';
import { Content } from '../../components/content';
import { Footer } from '../../components/footer';
import { DEFAULT_TITLE } from '../../lib/constants';

interface IDevPageProps {
    readonly devPostsMetadatas: IContentMetadata[];
}

const DevPage: FC<IDevPageProps> = ({ devPostsMetadatas }) => {
    return (
        <Layout meta={{ title: `Dev | ${DEFAULT_TITLE}` }}>
            <Header />
            {devPostsMetadatas.length > 0 && (
                <Content
                    type={ContentTypeEnum.DEV}
                    metadatas={devPostsMetadatas}
                />
            )}
            <Footer />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    generateMainFeeds();

    const devPosts = await getContents(ContentTypeEnum.DEV);
    const devPostsMetadatas = devPosts.map((devPost) => devPost.metadata);

    return {
        props: {
            devPostsMetadatas
        }
    };
};

export default DevPage;
