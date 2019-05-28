
function calcTripCost(distance, fuelType) {

    const CAR_CONSUPTION = 6.5
    let fuelCost

    if (fuelType == 'GASÓLEO') {
        fuelCost = 1.4
    } else if (fuelType == 'GASOLINA') {
        fuelCost = 1.5
    } else {
        return 'Bad fuel type given'
    }

    let tripCost = (distance * CAR_CONSUPTION / 100) * fuelCost

    return tripCost

}

console.log(calcTripCost(50, 'GASÓLEO'))
console.log(calcTripCost(320, 'GASOLINA'))
console.log(calcTripCost(320, 'BADTEST'))
