// Function declaration
function declaration() {
}

// Function expression
let expression = function () {
}

// --- Function arrow --- //

// 1. normal, `()` is needed is no param
let arrow = () => {
}

// 2. with param
let arrow2 = (name) => {
    return console.log(name)
}

// 3. with auto return if only one statement
let arrow3 = (name) => {
    console.log(name)
}

// 4. without `()` if only one param
let arrow4 = name => {
    console.log(name)
}

// 5. without `{}` if only one statement
let arrow5 = name => console.log(name)

// ------ arrow end ----- //


let players = ["miracle", "heaven", "broccoli"]

// with normal function
function NormalCount() {
    return players.map(function (name) {
        return name.length
    })
}

console.log(NormalCount())

// with expression function
let expressionFunction = function () {
    return players.map(function (name) {
        return name.length
    })
}

console.log(expressionFunction())


// with expression variable
let expressionVariable = players.map(function (name) {
    return name.length
})

console.log(expressionVariable)

// with arrow function => tips for arrow in arrow_function.js
let arrowFunction = players.map(name => ({name, length: name.length}))

console.log(arrowFunction)
console.table(arrowFunction)


