// if confused debug console.log(this)
// ---- 1 ---- //
//correct
let mhs = {
    name: "one",
    sayOne: function () { // not hoisting
        console.log(`${this.name}`) // `this` in function is exist, refer to `Object`
    }
}
//error: undefined
let mhs = {
    name: "one",
    sayOne: () => { // not hoisting
        console.log(`${this.name}`) // `this` not store in arrow function, so find in lexical scope which is `window`
    }
}

// ---- 2 ---- //
//error: undefined
let mhs = function () {
    this.name = "one"
    setInterval(function () { // hoisting
        console.log(this.name) // `this` in function doesn't exist, so find in `window` => hoisting, this refer in `window`
    }, 500)
}

//correct
let mhs = function () {
    this.name = "one"
    setInterval(() => { // hoisting
        console.log(this.name) // `this` not store in arrow function, so find in lexical scope which is `function`
    }, 500)
}
