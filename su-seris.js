function factarialNo(number) {
    sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;

}

factarialNo(20);