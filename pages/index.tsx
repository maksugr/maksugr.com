import Head from 'next/head';
import { FC } from 'react';

import { Container } from '../components/container';
import { Navigation } from '../components/navigation';
import { Layout } from '../components/layout';
import { DEFAULT_TITLE } from '../lib/constants';
import { Header } from '../components/header';
import { Title } from '../components/title';

const IndexPage: FC = () => {
    return (
        <>
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
        </>
    );
};

export default IndexPage;
