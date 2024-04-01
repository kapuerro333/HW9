let test = prompt("Test", '');

let lastDigit = parseInt(test) % 10;

if (test < 0) {
    console.log("Введено від'ємне число");
} else if (lastDigit === 1) {
    console.log("Введено: " + test + " рік");
} else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
    console.log("Введено: " + test + " роки");
} else {
    console.log("Введено: " + test + " років");
}

// Hope it is correct code