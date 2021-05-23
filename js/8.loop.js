const mhs = ['adam', 'faiz', 'nana']

//1
for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i])
}

//2 => only array, use 2 param to get (value, index)
mhs.forEach(m => console.log(m))

//3 => can loop string, arguments, doesnt has index
for (const m of mhs) {
    console.log(m)
}

//4 => can loop value + index in array, but all param should use
for (const [i, m] of mhs.entries()) {
    console.log(m)
}

// loop object
const loopObject = {
    name: "Adam",
    age: 12
}

for (const m in loopObject){
    console.log(m) //index
    console.log(loopObject[m]) //value
}
