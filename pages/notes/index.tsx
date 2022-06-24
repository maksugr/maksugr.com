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

interface INotesPageProps {
    readonly notesMetadatas: IContentMetadata[];
}

const NotesPage: FC<INotesPageProps> = ({ notesMetadatas }) => {
    return (
        <Layout meta={{ title: `Notes | ${DEFAULT_TITLE}` }}>
            <Container>
                <Navigation />
                {notesMetadatas.length > 0 && (
                    <Content
                        type={ContentTypeEnum.NOTES}
                        metadatas={notesMetadatas}
                    />
                )}
                <Footer />
            </Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const notes = await getContents(ContentTypeEnum.NOTES);
    const notesMetadatas = notes.map((note) => note.metadata);

    return {
        props: {
            notesMetadatas
        }
    };
};

export default NotesPage;
