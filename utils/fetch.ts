import { csv } from 'd3-fetch';

export const fetchCSV = async <T>(
    path: string,
    callback: (rawData: T) => void
) => {
    const rawData: unknown = await csv(path);
    callback(rawData as T);
};
