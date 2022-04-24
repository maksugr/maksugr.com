import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const notesDirectory = join(process.cwd(), '_notes');

export const getNoteSlugs = () => {
    return fs.readdirSync(notesDirectory);
};

export const getNoteBySlug = (slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(notesDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    interface IItems {
        [key: string]: string;
    }

    const items: IItems = {};

    // ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
};

export const getNotes = (fields: string[] = []) => {
    const noteSlugs = getNoteSlugs();
    const notes = noteSlugs
        .map((noteSlug) => getNoteBySlug(noteSlug, fields))
        // sort notes by date in descending order
        .sort((note1, note2) => (note1.date > note2.date ? -1 : 1));
    return notes;
};
