import { parseISO, format } from 'date-fns';
import { FC } from 'react';

interface IDateFormatterProps {
    readonly dateString: string;
}

export const DateFormatter: FC<IDateFormatterProps> = ({ dateString }) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};
