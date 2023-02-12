import { ReligionsEnum } from '../enums/religions';
import {
    IReligionGlobalData,
    IReligionGlobalDataNumbers
} from '../interfaces/religion-global-data';
import { IReligionGlobalRawData } from '../interfaces/religion-global-raw-data';
import { toNumber, toPercent } from '../utils/numbers';

import { mapGlobalRawProperyToDataProperty } from './map-global-raw-propery-to-data-property';

export const mapGlobalRawDataToData = (
    rawData: IReligionGlobalRawData[]
): IReligionGlobalData[] => {
    const rawDataPropertiesToIgnore = ['year', 'pop'];

    const religions = Object.values(ReligionsEnum);

    return rawData.map((d) => {
        const rawDataProperties = Object.keys(d);

        const result = {
            year: d.year,
            absolute: {
                religions: {},
                total: 0,
                population: 0
            } as IReligionGlobalDataNumbers,
            relative: {
                religions: {},
                total: 0,
                population: 0
            } as IReligionGlobalDataNumbers
        };

        religions.forEach((religion) => {
            result.absolute.religions[religion] = {
                families: {} as never,
                total: 0
            };
            result.relative.religions[religion] = {
                families: {} as never,
                total: 0
            };
        });

        rawDataProperties.forEach((rawDataProperty) => {
            const rawDataPropertyValue = toNumber(
                d[rawDataProperty as keyof IReligionGlobalRawData]
            );

            if (rawDataPropertiesToIgnore.includes(rawDataProperty)) {
                return;
            }

            if (rawDataProperty === 'sumrelig') {
                result.absolute.total = rawDataPropertyValue;
                return;
            }

            if (rawDataProperty === 'worldpop') {
                result.absolute.population = rawDataPropertyValue;
                return;
            }

            if (rawDataProperty === 'sumreligpct') {
                result.relative.total = toPercent(rawDataPropertyValue);
                return;
            }

            if (rawDataProperty === 'ptctotal') {
                result.relative.population = toPercent(rawDataPropertyValue);
                return;
            }

            const absoluteDataProperty =
                mapGlobalRawProperyToDataProperty[rawDataProperty];
            const relativeDataProperty =
                mapGlobalRawProperyToDataProperty[rawDataProperty.slice(0, -3)];

            if (absoluteDataProperty) {
                if (absoluteDataProperty.family) {
                    result.absolute.religions[
                        absoluteDataProperty.religion
                    ].families[absoluteDataProperty.family] =
                        rawDataPropertyValue;
                } else {
                    result.absolute.religions[
                        absoluteDataProperty.religion
                    ].total = rawDataPropertyValue;
                }

                return;
            }

            if (relativeDataProperty) {
                if (relativeDataProperty.family) {
                    result.relative.religions[
                        relativeDataProperty.religion
                    ].families[relativeDataProperty.family] =
                        toPercent(rawDataPropertyValue);
                } else {
                    result.relative.religions[
                        relativeDataProperty.religion
                    ].total = toPercent(rawDataPropertyValue);
                }

                return;
            }
        });

        return result;
    });
};
