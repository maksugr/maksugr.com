import { ResponsiveLine, Serie } from '@nivo/line';
import { useEffect, useState } from 'react';

import { fetchCSV } from '../../../utils/fetch';

import { IReligionGlobalData } from './interfaces/religion-global-data';
import { IReligionGlobalRawData } from './interfaces/religion-global-raw-data';
import { mapGlobalRawDataToData } from './mappers/map-global-raw-data-to-data';

const mapGlobalDataToSerie = (data: IReligionGlobalData[]): Serie[] => {
    // if (data.length === 0) {
    //     return [];
    // }

    // const d0 = data[0];
    // const religions = Object.keys(d0).filter(
    //     (property) => property !== 'year' && property !== 'version'
    // );

    // return religions.map((religion) => ({
    //     id: religion,
    //     data: data.map((d) => ({
    //         x: d.year,
    //         y:
    //             d[religion as keyof IReligionGlobalRawData].replaceAll(
    //                 ',',
    //                 ''
    //             ) || null
    //     }))
    // }));

    return [];
};

export const ReligionGlobal = () => {
    const [data, setData] = useState<null | IReligionGlobalData[]>(null);

    useEffect(() => {
        fetchCSV<IReligionGlobalRawData[]>(
            '/datasets/religion/cow/global.csv',
            (rawData) => setData(mapGlobalRawDataToData(rawData))
        );
    }, []);

    if (!data) {
        return null;
    }

    console.log(data);

    return (
        <div style={{ height: 500 }}>
            <ResponsiveLine
                data={mapGlobalDataToSerie(data)}
                useMesh
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
};
