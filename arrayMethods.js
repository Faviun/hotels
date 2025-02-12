const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sliceMethod() {
    console.log(arr.slice(0, 5));
    //arr.slice([start], [end]) возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.
}

function indexOfMethod() {
    console.log(arr.indexOf(2, 1));
    // arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае -1.
}

function includesMethod() {
    console.log(arr.includes(1, 0));
    // arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен. Похож на indexOf, но ищет справа налево.
}

sliceMethod();
indexOfMethod();
includesMethod();
