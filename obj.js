function sumNumericFields(obj) {
    let sum = 0;
    for (const key in obj) {
        if (typeof obj[key] === "number") {
            sum += obj[key];
        }
    }

    console.log(sum);
}

function getSortedNumericFields(obj) {
    const numericKeys = Object.keys(obj).filter(
        (key) => typeof obj[key] === "number"
    );

    numericKeys.sort((a, b) => obj[b] - obj[a]);
    console.log(numericKeys);
}

sumNumericFields({name: "Vasya", friends: 5, likes: 19, projects: 7});
getSortedNumericFields({name: "Vasya", friends: 5, likes: 19, projects: 7});
