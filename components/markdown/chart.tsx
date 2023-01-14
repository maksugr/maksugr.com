import { FC } from 'react';

import { BILine } from '../charts/bi';

enum ChartNameEnum {
    BILine = 'biline'
}

export interface IChartProps {
    readonly name: ChartNameEnum;
}

const chartMap = {
    [ChartNameEnum.BILine]: <BILine />
};

export const Chart: FC<IChartProps> = ({ name }) => {
    return chartMap[name] || null;
};
