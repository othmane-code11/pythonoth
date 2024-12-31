function calculatrice(num1, num2, op) {
    let res = 0;
    if (op == '+') {
        res = num1 + num2;
        console.log(`${num1} + ${num2} = ${res}`);
    }
    else if (op == '-') {
        res = num1 - num2;
        console.log(`${num1} - ${num2} = ${res}`);
    }
    else if (op == '*') {
        res = num1 * num2;
        console.log(`${num1} * ${num2} = ${res}`);
    }
    else if (op == '/') {
        res = num1 / num2;
        console.log(`${num1} / ${num2} = ${res}`);
    }
    else {
        console.log(`l'operateur que vous avez entrer est incorrect !`);
    }
}
calculatrice(12, 10, '+');
calculatrice(12, 10, '-');
calculatrice(12, 10, '/');
calculatrice(12, 10, '*');