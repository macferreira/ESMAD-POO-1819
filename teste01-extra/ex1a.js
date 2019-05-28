function sumNextOddNumbers(numA, numB) {

    let startNumber = numA
    let nextOddNumbers = numB
    let oddNumbersArray = []
    let oddNumbersSum = 0


    while (oddNumbersArray.length < nextOddNumbers && numB > 0) {
        startNumber++
        if (startNumber % 2 > 0) {
            oddNumbersArray.push(startNumber)
            oddNumbersSum += startNumber
        }
    }

    return oddNumbersSum
}

console.log(sumNextOddNumbers(3, 4))
console.log(sumNextOddNumbers(1, 1))
console.log(sumNextOddNumbers(3, 3))
console.log(sumNextOddNumbers(2, 0))
