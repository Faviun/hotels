function myFilter(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);

console.log(evenNumbers); //2, 4

const greaterThanThree = myFilter(numbers, function (num) {
    return num > 3;
});
console.log(greaterThanThree); //4, 5
