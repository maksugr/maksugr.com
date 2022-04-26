import { FC } from 'react';

import { Container } from '../components/container';
import { Header } from '../components/header';
import { Layout } from '../components/layout';
import { Navigation } from '../components/navigation';
import { Title } from '../components/title';
import { DEFAULT_TITLE } from '../lib/constants';

const Page404: FC = () => {
    return (
        <Layout meta={{ title: `404 | ${DEFAULT_TITLE}` }}>
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
