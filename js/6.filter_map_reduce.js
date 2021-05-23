// filter => resulting new filtered `array` with filter array `IN`
// map => LIKE `foreach` but resulting new `array`


// filter vs create normal function
let newNumber = [11, -2, 32, -4, -25, 4];

function newFilter(number, filterNumber) {
    const tempNumber = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] > filterNumber){
            tempNumber.push(number[i]);
        }
    }
    return tempNumber;
}

let filteredNumberNormal = newFilter(newNumber, 3)
console.log(filteredNumberNormal)

let filteredNumberFilter = newNumber.filter(function(x){
    return x > 3
})
console.log(filteredNumberFilter)

let filteredNumberFilterOneStatement = newNumber.filter(x => x > 3)
console.log(filteredNumberFilterOneStatement)


// map
let mapTimeNumber = newNumber.map(x => x * 2)
console.log(mapTimeNumber)

// reduce
let reduceSumNumber = newNumber.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(reduceSumNumber)


// method chaining
let chainingNumber = newNumber.filter(x => x > 3).map(x => x * 2).reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(chainingNumber)
