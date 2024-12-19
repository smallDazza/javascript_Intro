

function shownumbers(number) {
    for (let i = 1; i <= number; i++) {
        
        const display = (i % 2 === 0) ? "Even" : "Odd";
        console.log(i, display)
    }
    
}

result = shownumbers(10);
console.log(result)