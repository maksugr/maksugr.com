import { FC } from 'react';

import markdownStyles from './markdown.module.css';

export const NoteBody: FC = ({ children }) => {
    return <div className={markdownStyles['markdown']}>{children}</div>;
};
