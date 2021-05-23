// [...arr] returned array or Array.from(arguments)

const mhs = ['john', 'adam', 'faiz', 'nana']
const lecturer = ['miss', 'mister']
console.log(...mhs[0])

// join 2 array

// wrong
const peopleWrong = [mhs, lecturer]
console.log(peopleWrong)

//correct
const peopleCorrect = [...mhs, ...lecturer]
console.log(peopleCorrect)

// duplicate or cloning array

// wrong
peopleDuplicateWrong = peopleCorrect //this is refer like pointer

//correct
peopleDuplicateCorrect = [...peopleCorrect]


