import Head from 'next/head';
import { FC } from 'react';

import { Container } from '../components/container';
import { Header } from '../components/header';
import { Layout } from '../components/layout';
import { Navigation } from '../components/navigation';
import { Title } from '../components/title';
import { DEFAULT_TITLE } from '../lib/constants';

const Page404: FC = () => {
    return (
        <Layout>
            <Head>
                <title>404 | {DEFAULT_TITLE}</title>
            </Head>
            <Container>
                <Navigation />
                <Header>
                    <Title>404 🤷</Title>
                </Header>
            </Container>
        </Layout>
    );
};

export default Page404;
