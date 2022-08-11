let divideByTwo = (n) => alert(n/2);
do {
    let integer = Number(prompt("Enter an integer", 0));
    if (integer && Number.isInteger(integer)){
        divideByTwo(integer);
        break;
    }
} while (true);