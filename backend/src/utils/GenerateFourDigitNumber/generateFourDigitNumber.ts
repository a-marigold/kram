export function generateFourDigitNumber() {
    const min = 1000;
    const max = 9999;
    return Math.random() * (max - min) + min;
}
