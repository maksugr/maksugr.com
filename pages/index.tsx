import Head from 'next/head';
import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Container } from '../components/container';
import { Navigation } from '../components/navigation';
import { Layout } from '../components/layout';
import { DEFAULT_TITLE } from '../lib/constants';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { generateMainFeeds } from '../lib/feeds';

const IndexPage: FC = () => {
    return (
        <Layout>
            <Head>
                <title>{DEFAULT_TITLE}</title>
            </Head>
            <Container>
                <Navigation />
                <Header>
                    <Title>Hey 👋</Title>
                </Header>
            </Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = () => {
    generateMainFeeds();

    return {
        props: {}
    };
};

export default IndexPage;
