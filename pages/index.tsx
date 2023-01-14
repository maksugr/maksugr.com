import { GetStaticProps } from 'next';

import { Layout } from '../components/layout';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { generateMainFeeds } from '../lib/feeds';

const IndexPage = () => {
    return (
        <Layout>
            <Header />
            <Footer />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    generateMainFeeds();

    return {
        props: {}
    };
};

export default IndexPage;
