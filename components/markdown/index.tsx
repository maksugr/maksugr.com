import { Chart, IChartProps } from './chart';
import { IImageProps, Image } from './image';
import { ILinkProps, Link } from './link';

export const MDXComponents = {
    a: (props: ILinkProps) => <Link {...props} />,
    img: (props: IImageProps) => <Image {...props} alt={props.alt} />,
    Chart: (props: IChartProps) => <Chart {...props} />
};
