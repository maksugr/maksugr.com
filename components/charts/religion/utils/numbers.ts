export const toNumber = (string: string) => {
    return Number(string.replaceAll(',', ''));
};

export const toPercent = (number: number) => {
    return number * 100;
};
