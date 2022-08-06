function maltifiCation(startNumber, endNumber) {
    into1 = startNumber;
    for (let i = startNumber; i <= endNumber; i++) {
        into1 = into1 * i;
        console.log(into1);
    }
    return into1;
}

maltifiCation(2, 10);
