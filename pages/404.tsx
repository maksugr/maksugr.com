import { FC } from 'react';

import { Footer } from '../components/footer';
import { Layout } from '../components/layout';
import { Header } from '../components/header';
import { DEFAULT_TITLE } from '../lib/constants';

const Page404: FC = () => {
    return (
        <Layout meta={{ title: `404 | ${DEFAULT_TITLE}` }}>
            <Header />
            <div className='container-bounded'>
                <h1 className='text-7xl md:text-9xl'>Got lost?</h1>
            </div>
            <Footer />
        </Layout>
    );
};

export default Page404;
