function factarialNo(sNumber, number) {
    sum = 0;
    for (let i = sNumber; i <= number; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;

}

factarialNo(10, 30);