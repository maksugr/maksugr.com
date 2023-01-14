import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Content } from '../../components/content';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { DEFAULT_TITLE } from '../../lib/constants';
import { getContents } from '../../lib/content';
import { IContentMetadata } from '../../interfaces/content-metadata';
import { ContentTypeEnum } from '../../enums/content-type';
import { Footer } from '../../components/footer';

interface ITheGraspPageProps {
    readonly theGraspMetadatas: IContentMetadata[];
}

const TheGraspPage: FC<ITheGraspPageProps> = ({ theGraspMetadatas }) => {
    return (
        <Layout meta={{ title: `The Grasp | ${DEFAULT_TITLE}` }}>
            <Header />
            {theGraspMetadatas.length > 0 && (
                <Content
                    type={ContentTypeEnum.THE_GRASP}
                    metadatas={theGraspMetadatas}
                />
            )}
            <Footer />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const theGraspPosts = await getContents(ContentTypeEnum.THE_GRASP);
    const theGraspMetadatas = theGraspPosts.map(
        (theGraspPost) => theGraspPost.metadata
    );

    return {
        props: {
            theGraspMetadatas
        }
    };
};

export default TheGraspPage;
