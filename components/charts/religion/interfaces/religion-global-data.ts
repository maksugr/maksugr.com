import { BuddhismFamiliesEnum } from '../enums/buddhism-families';
import { ChristianityFamiliesEnum } from '../enums/christianity-families';
import { IslamFamiliesEnum } from '../enums/islam-families';
import { JudaismFamiliesEnum } from '../enums/judaism-families';
import { ReligionsEnum } from '../enums/religions';

export interface IReligionGlobalDataNumbers {
    readonly religions: {
        [ReligionsEnum.Christianity]: {
            families: {
                [ChristianityFamiliesEnum.Protestants]: number;
                [ChristianityFamiliesEnum.Roman_Catholics]: number;
                [ChristianityFamiliesEnum.Eastern_Orthodox]: number;
                [ChristianityFamiliesEnum.Anglican]: number;
                [ChristianityFamiliesEnum.Others]: number;
            };
            total: number;
        };
        [ReligionsEnum.Judaism]: {
            families: {
                [JudaismFamiliesEnum.Orthodox]: number;
                [JudaismFamiliesEnum.Conservatives]: number;
                [JudaismFamiliesEnum.Reform]: number;
                [JudaismFamiliesEnum.Others]: number;
            };
            total: number;
        };
        [ReligionsEnum.Islam]: {
            families: {
                [IslamFamiliesEnum.Sunni]: number;
                [IslamFamiliesEnum.Shi_a]: number;
                [IslamFamiliesEnum.Ibadhi]: number;
                [IslamFamiliesEnum.Nation_of_Islam]: number;
                [IslamFamiliesEnum.Alawite]: number;
                [IslamFamiliesEnum.Ahmadiyya]: number;
                [IslamFamiliesEnum.Others]: number;
            };
            total: number;
        };
        [ReligionsEnum.Buddhism]: {
            families: {
                [BuddhismFamiliesEnum.Mahayana]: number;
                [BuddhismFamiliesEnum.Theravada]: number;
                [BuddhismFamiliesEnum.Others]: number;
            };
            total: number;
        };
        [ReligionsEnum.Zoroastrian]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Hindu]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Sikh]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Shinto]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Baha_i]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Taoism]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Confucianism]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Jain]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Syncretic_Religions]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Animist_Religions]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Non_Religious]: {
            families: Record<string, never>;
            total: number;
        };
        [ReligionsEnum.Other]: {
            families: Record<string, never>;
            total: number;
        };
    };
    total: number;
    population: number;
}

export interface IReligionGlobalData {
    readonly year: string;
    readonly absolute: IReligionGlobalDataNumbers;
    readonly relative: IReligionGlobalDataNumbers;
}
