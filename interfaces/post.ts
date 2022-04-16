import { IAuthor } from './author';

export interface IPost {
    readonly slug: string;
    readonly title: string;
    readonly date: string;
    readonly coverImage: string;
    readonly author: IAuthor;
    readonly excerpt: string;
    readonly ogImage: {
        readonly url: string;
    };
    readonly content: string;
}
