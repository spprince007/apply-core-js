function numberDefine(number) {
    var numbers = number % 2;
    if (numbers === 0) {
        console.log(number, "is even Number")
    }
    else {
        console.log(number, "is odd number")
    }
    return numbers;

}

numberDefine(42);

