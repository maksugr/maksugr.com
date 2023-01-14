import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Container } from '../../components/container';
import { Content } from '../../components/content';
import { Navigation } from '../../components/navigation';
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
            <Container>
                <Navigation />
                {theGraspMetadatas.length > 0 && (
                    <Content
                        type={ContentTypeEnum.THE_GRASP}
                        metadatas={theGraspMetadatas}
                    />
                )}
                <Footer />
            </Container>
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
