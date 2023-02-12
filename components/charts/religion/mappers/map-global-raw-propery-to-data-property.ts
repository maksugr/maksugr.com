import { BuddhismFamiliesEnum } from '../enums/buddhism-families';
import { ChristianityFamiliesEnum } from '../enums/christianity-families';
import { IslamFamiliesEnum } from '../enums/islam-families';
import { JudaismFamiliesEnum } from '../enums/judaism-families';
import { ReligionsEnum } from '../enums/religions';

interface IMapGlobalRawProperyToDataProperty {
    readonly [key: string]: {
        readonly religion: ReligionsEnum;
        readonly family?:
            | ChristianityFamiliesEnum
            | JudaismFamiliesEnum
            | IslamFamiliesEnum
            | BuddhismFamiliesEnum;
    };
}

export const mapGlobalRawProperyToDataProperty: IMapGlobalRawProperyToDataProperty =
    {
        chrstprot: {
            religion: ReligionsEnum.Christianity,
            family: ChristianityFamiliesEnum.Protestants
        },
        chrstcat: {
            religion: ReligionsEnum.Christianity,
            family: ChristianityFamiliesEnum.Roman_Catholics
        },
        chrstorth: {
            religion: ReligionsEnum.Christianity,
            family: ChristianityFamiliesEnum.Eastern_Orthodox
        },
        chrstang: {
            religion: ReligionsEnum.Christianity,
            family: ChristianityFamiliesEnum.Anglican
        },
        chrstothr: {
            religion: ReligionsEnum.Christianity,
            family: ChristianityFamiliesEnum.Others
        },
        chrstgen: {
            religion: ReligionsEnum.Christianity
        },
        judorth: {
            religion: ReligionsEnum.Judaism,
            family: JudaismFamiliesEnum.Orthodox
        },
        jdcons: {
            religion: ReligionsEnum.Judaism,
            family: JudaismFamiliesEnum.Conservatives
        },
        judref: {
            religion: ReligionsEnum.Judaism,
            family: JudaismFamiliesEnum.Reform
        },
        judothr: {
            religion: ReligionsEnum.Judaism,
            family: JudaismFamiliesEnum.Others
        },
        judgen: {
            religion: ReligionsEnum.Judaism
        },
        islmsun: {
            religion: ReligionsEnum.Islam,
            family: IslamFamiliesEnum.Sunni
        },
        islmshi: {
            religion: ReligionsEnum.Islam,
            family: IslamFamiliesEnum.Shi_a
        },
        islmibd: {
            religion: ReligionsEnum.Islam,
            family: IslamFamiliesEnum.Ibadhi
        },
        islmnat: {
            religion: ReligionsEnum.Islam,
            family: IslamFamiliesEnum.Nation_of_Islam
        },
        islmalw: {
            religion: ReligionsEnum.Islam,
            family: IslamFamiliesEnum.Alawite
        },
        islmahm: {
            religion: ReligionsEnum.Islam,
            family: IslamFamiliesEnum.Ahmadiyya
        },
        islmothr: {
            religion: ReligionsEnum.Islam,
            family: IslamFamiliesEnum.Others
        },
        islmgen: {
            religion: ReligionsEnum.Islam
        },
        budmah: {
            religion: ReligionsEnum.Buddhism,
            family: BuddhismFamiliesEnum.Mahayana
        },
        budthr: {
            religion: ReligionsEnum.Buddhism,
            family: BuddhismFamiliesEnum.Theravada
        },
        budothr: {
            religion: ReligionsEnum.Buddhism,
            family: BuddhismFamiliesEnum.Others
        },
        budgen: {
            religion: ReligionsEnum.Buddhism
        },
        zorogen: {
            religion: ReligionsEnum.Zoroastrian
        },
        hindgen: {
            religion: ReligionsEnum.Hindu
        },
        sikhgen: {
            religion: ReligionsEnum.Sikh
        },
        shntgen: {
            religion: ReligionsEnum.Shinto
        },
        bahgen: {
            religion: ReligionsEnum.Baha_i
        },
        taogen: {
            religion: ReligionsEnum.Taoism
        },
        jaingen: {
            religion: ReligionsEnum.Confucianism
        },
        confgen: {
            religion: ReligionsEnum.Jain
        },
        syncgen: {
            religion: ReligionsEnum.Syncretic_Religions
        },
        anmgen: {
            religion: ReligionsEnum.Animist_Religions
        },
        nonrelig: {
            religion: ReligionsEnum.Non_Religious
        },
        othrgen: {
            religion: ReligionsEnum.Other
        }
    };
