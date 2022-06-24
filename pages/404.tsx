import { FC } from 'react';

import { Container } from '../components/container';
import { Footer } from '../components/footer';
import { Layout } from '../components/layout';
import { Navigation } from '../components/navigation';
import { DEFAULT_TITLE } from '../lib/constants';

const Page404: FC = () => {
    return (
        <Layout meta={{ title: `404 | ${DEFAULT_TITLE}` }}>
            <Container>
                <Navigation />
                <h1 className='text-7xl md:text-9xl'>Got lost?</h1>
                <Footer />
            </Container>
        </Layout>
    );
};

export default Page404;
