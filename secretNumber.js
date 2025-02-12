function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    let tryNumber = 0;
    let guessNumber;
    let currentMin = 0;
    let currentMax = 100;

    console.log(`Первый компьютер загадал число от 0 до 100.`);

    while (true) {
        tryNumber++;
        guessNumber = Math.floor((currentMin + currentMax) / 2);
        console.log(
            `Попытка №${tryNumber}: Компьютер 2: Пробую число ${guessNumber}.`
        );

        if (guessNumber === randomNumber) {
            console.log(
                `Второй компьютер угадал число ${randomNumber} за ${tryNumber} попыток!`
            );
            break;
        } else if (guessNumber < randomNumber) {
            console.log(`Подсказка: Загаданное число больше ${guessNumber}.`);
            currentMin = guessNumber + 1;
        } else {
            console.log(`Подсказка: Загаданное число меньше ${guessNumber}.`);
            currentMax = guessNumber - 1;
        }

        console.log(`Новый диапазон: от ${currentMin} до ${currentMax}.`);
    }
}

guessNumberGame();
