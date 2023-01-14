import { FC } from 'react';

import { BILine } from '../charts/bi';

enum ChartNameEnum {
    BILine = 'biline'
}

export interface IChartProps {
    readonly name: ChartNameEnum;
    readonly fullWidth?: boolean;
}

const chartMap = {
    [ChartNameEnum.BILine]: <BILine />
};

export const Chart: FC<IChartProps> = ({ name, fullWidth }) => {
    let className = 'container-full';
    let style = {};

    if (fullWidth) {
        className += ' w-screen';
        style = { ...style, marginLeft: 'calc((100% - 100vw) / 2)' };
    }

    return (
        (
            <div className={className} style={style}>
                {chartMap[name]}
            </div>
        ) || null
    );
};
