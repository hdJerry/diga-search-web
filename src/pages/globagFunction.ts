const intlFormat = (num: number) => {
    return Math.floor(num);
};

export function abbreviateNumber(value: number) {
    console.log();

    let num = Math.floor(value);
    if (num >= 10000000000000)
        return intlFormat(num / 1000000000000) + 'T';
    if (num >= 1000000000)
        return intlFormat(num / 1000000000) + 'B';
    if (num >= 1000000)
        return intlFormat(num / 1000000) + 'M';
    if (num >= 1000)
        return intlFormat(num / 1000) + 'k';
    return intlFormat(num);
}