import Head from 'next/head';
import { FC } from 'react';

import { Container } from '../components/container';
import { MoreStories } from '../components/more-stories';
import { HeroPost } from '../components/hero-post';
import { Intro } from '../components/intro';
import { Layout } from '../components/layout';
import { getAllPosts } from '../lib/api';
import { IPost } from '../interfaces/post';
import { DEFAULT_TITLE } from '../lib/constants';

interface IIndex {
    readonly allPosts: IPost[];
}

const Index: FC<IIndex> = ({ allPosts }) => {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <>
            <Layout>
                <Head>
                    <title>{DEFAULT_TITLE}</title>
                </Head>
                <Container>
                    <Intro />
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    );
};

export default Index;

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt'
    ]);

    return {
        props: { allPosts }
    };
};
