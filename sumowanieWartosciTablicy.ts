const sumArray = (array: number[]): number => {
    return array.reduce((sum, value) => sum + value, 0);
};


/*

    more reduce examples without tests

 */

//concatenation
const words = ["Hello", " ", "World", "!"];
const concatenated = words.reduce((result, word) => result + word, "");
console.log(concatenated);

//max value
const numbers = [10, 5, 8, 3, 12];
const max = numbers.reduce((currentMax, value) => {
    return value > currentMax ? value : currentMax;
}, -Infinity);
console.log(max);

//average value
const numbers1 = [4, 2, 6, 8, 5];
const average = numbers1.reduce((sum, value, index, array) => {
    sum += value;
    if (index === array.length - 1) {
        return sum / array.length;
    }
    return sum;
}, 0);
console.log(average);


