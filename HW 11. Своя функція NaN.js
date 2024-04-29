function isNanFunction(value) {
    if (isNaN(value)) {
        return true;
    } else if (value === undefined || value === 'a') {
        return true;
    } else {
        return false;
    }
}

console.log(isNanFunction(NaN));