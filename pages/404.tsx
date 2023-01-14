import { FC } from 'react';

import { Container } from '../components/container';
import { Footer } from '../components/footer';
import { Layout } from '../components/layout';
import { Header } from '../components/header';
import { DEFAULT_TITLE } from '../lib/constants';

const Page404: FC = () => {
    return (
        <Layout meta={{ title: `404 | ${DEFAULT_TITLE}` }}>
            <Container>
                <Header />
                <h1 className='text-7xl md:text-9xl'>Got lost?</h1>
                <Footer />
            </Container>
        </Layout>
    );
};

export default Page404;
