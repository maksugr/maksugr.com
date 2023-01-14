import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '../components/layout';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { generateMainFeeds } from '../lib/feeds';
import authorPicture from '../assets/author-picture.jpg';

const IndexPage = () => {
    return (
        <Layout>
            <Header />
            <div className='flex flex-col md:flex-row container-bounded'>
                <div className='mb-5 md:mr-5 w-2/3 md:w-1/3 h-auto'>
                    <Image src={authorPicture} alt='Roman Ponomarev picture' />
                </div>
                <div className='text-lg md:w-2/3'>
                    <p className='mb-5'>
                        Hi, I{"'"}m <b className='text-red'>Roman Ponomarev</b>.
                    </p>
                    <p className='mb-5'>
                        I&nbsp;write code, study computer science, participate
                        in&nbsp;podcasts and&nbsp;speak at&nbsp;conferences.
                    </p>
                    <p className='mb-5'>
                        One of&nbsp;my passions has&nbsp;always been journalism
                        (actually, I&nbsp;even worked as a&nbsp;journalist
                        for&nbsp;a&nbsp;while). Here you can find{' '}
                        <Link href='/thegrasp'>
                            <a>
                                <b>The Grasp</b>
                            </a>
                        </Link>{' '}
                        — my attempt to&nbsp;create new knowledge from&nbsp;data
                        in&nbsp;the&nbsp;shape of&nbsp;charts. I&nbsp;hope there
                        will be tiny articles (just to&nbsp;pay attention
                        to&nbsp;the&nbsp;theme) and&nbsp;strong research
                        projects. In&nbsp;short, Data Journalism.
                    </p>
                    <p>
                        You are also welcome to&nbsp;the&nbsp;{' '}
                        <Link href='/dev'>
                            <a>
                                <b>Dev</b>
                            </a>
                        </Link>{' '}
                        section. There will be different technical articles
                        about data visualization, data science, and other{' '}
                        <i>data-</i>&nbsp;buzzwords but not only.
                    </p>
                </div>
            </div>
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
