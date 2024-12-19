

function sum(limit) {
    number = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            number += i;
    }

    return number;
}

result = sum(10);
console.log(result);