import { ResponsiveLine } from '@nivo/line';

const data = [
    {
        id: 'japan',
        color: 'hsl(117, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 233
            },
            {
                x: 'helicopter',
                y: 212
            },
            {
                x: 'boat',
                y: 270
            },
            {
                x: 'train',
                y: 113
            },
            {
                x: 'subway',
                y: 46
            },
            {
                x: 'bus',
                y: 283
            },
            {
                x: 'car',
                y: 172
            },
            {
                x: 'moto',
                y: 110
            },
            {
                x: 'bicycle',
                y: 203
            },
            {
                x: 'horse',
                y: 125
            },
            {
                x: 'skateboard',
                y: 48
            },
            {
                x: 'others',
                y: 21
            }
        ]
    },
    {
        id: 'france',
        color: 'hsl(290, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 117
            },
            {
                x: 'helicopter',
                y: 84
            },
            {
                x: 'boat',
                y: 1
            },
            {
                x: 'train',
                y: 133
            },
            {
                x: 'subway',
                y: 155
            },
            {
                x: 'bus',
                y: 13
            },
            {
                x: 'car',
                y: 103
            },
            {
                x: 'moto',
                y: 259
            },
            {
                x: 'bicycle',
                y: 236
            },
            {
                x: 'horse',
                y: 233
            },
            {
                x: 'skateboard',
                y: 14
            },
            {
                x: 'others',
                y: 246
            }
        ]
    },
    {
        id: 'us',
        color: 'hsl(248, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 297
            },
            {
                x: 'helicopter',
                y: 165
            },
            {
                x: 'boat',
                y: 9
            },
            {
                x: 'train',
                y: 284
            },
            {
                x: 'subway',
                y: 97
            },
            {
                x: 'bus',
                y: 211
            },
            {
                x: 'car',
                y: 211
            },
            {
                x: 'moto',
                y: 200
            },
            {
                x: 'bicycle',
                y: 192
            },
            {
                x: 'horse',
                y: 186
            },
            {
                x: 'skateboard',
                y: 188
            },
            {
                x: 'others',
                y: 188
            }
        ]
    },
    {
        id: 'germany',
        color: 'hsl(92, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 91
            },
            {
                x: 'helicopter',
                y: 12
            },
            {
                x: 'boat',
                y: 119
            },
            {
                x: 'train',
                y: 194
            },
            {
                x: 'subway',
                y: 179
            },
            {
                x: 'bus',
                y: 159
            },
            {
                x: 'car',
                y: 16
            },
            {
                x: 'moto',
                y: 68
            },
            {
                x: 'bicycle',
                y: 177
            },
            {
                x: 'horse',
                y: 224
            },
            {
                x: 'skateboard',
                y: 38
            },
            {
                x: 'others',
                y: 43
            }
        ]
    },
    {
        id: 'norway',
        color: 'hsl(83, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 289
            },
            {
                x: 'helicopter',
                y: 111
            },
            {
                x: 'boat',
                y: 34
            },
            {
                x: 'train',
                y: 18
            },
            {
                x: 'subway',
                y: 224
            },
            {
                x: 'bus',
                y: 170
            },
            {
                x: 'car',
                y: 297
            },
            {
                x: 'moto',
                y: 258
            },
            {
                x: 'bicycle',
                y: 41
            },
            {
                x: 'horse',
                y: 263
            },
            {
                x: 'skateboard',
                y: 9
            },
            {
                x: 'others',
                y: 251
            }
        ]
    }
];

export const BILine = () => (
    <div style={{ height: 500 }}>
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=' >-.2f'
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
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
