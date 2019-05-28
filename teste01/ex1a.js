function sumOddNumbersInInterval(numA, numB) {

    let firstNumber = numA
    let lastNumber = numB

    if (numA > numB) {
        firstNumber = numB
        lastNumber = numA
    }

    let oddNumbersSum = 0

    for (i = firstNumber + 1; i < lastNumber; i++) {
        if (i % 2 > 0) {
            oddNumbersSum += i
        }
    }

    return oddNumbersSum
}

console.log(sumOddNumbersInInterval(9, 12))
console.log(sumOddNumbersInInterval(1, 6))
console.log(sumOddNumbersInInterval(12, 3))
console.log(sumOddNumbersInInterval(0, 1))