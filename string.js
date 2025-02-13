function upperCaseFirstLetter(str) {
    if (str.length === 0) {
        console.log("Строка пуста");
    } else {
        console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
    }
}

function truncatedString(str) {
    const limit = 40; //Максимальная длина строки

    if (str.length <= limit) {
        console.log(str);
    } else {
        let lastValidIndex = limit;
        for (let i = limit; i >= 0; i--) {
            if (/\s|[,.!?:;]/.test(str[i])) {
                lastValidIndex = i;
                break;
            }
        }

        if (lastValidIndex === limit) {
            lastValidIndex = limit;
        }

        console.log(str.slice(0, lastValidIndex).trim() + "...");
    }
}

function combinationCheck(str1, str2) {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    if (str1.includes(lowerStr2) || str2.includes(lowerStr1)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

upperCaseFirstLetter("hello, world"); //Hello, world
truncatedString(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
); //Lorem ipsum dolor sit amet, consectetur...
truncatedString("Lorem ipsum dolor sit amet"); //Lorem ipsum dolor sit amet
combinationCheck("hello", "hello, world"); //true
combinationCheck("thanks", "hello, world"); //false
