import { FC } from 'react';

import { ReligionGlobal } from '../charts/religion/global';

enum ChartNameEnum {
    ReligionGlobal = 'religion-global'
}

export interface IChartProps {
    readonly name: ChartNameEnum;
    readonly fullWidth?: boolean;
}

const chartMap = {
    [ChartNameEnum.ReligionGlobal]: <ReligionGlobal />
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
