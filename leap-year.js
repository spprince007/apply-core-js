function checkLeapYear(year) {
    var yearCheck = year % 4;
    console.log(yearCheck);
    if (yearCheck === 0) {
        console.log(year, 'is leap year')
    }
    else {
        console.log(year, 'is not leap year')
    }
    return yearCheck;
}

checkLeapYear(2012);