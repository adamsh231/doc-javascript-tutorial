// Array
const trialArray = [1, 2, 3]
const [a, b, c] = trialArray
const [a2, b3, c3 = "default value"] = trialArray

// Object
// 1
const trialObject = {
    name: "Adam",
    age: 12
}
const {d, e} = trialObject;

//2
const {name: d2, age: e2} = trialObject;
const {name: d3 = "default name", age: e3} = trialObject;

// 3
({d4, e4} = {name: "Adam", age: 12})


// Return
function destructuringReturn() {
    return ["name", 20]
}

const [f, g] = destructuringReturn()

// Rest param
const trialArrayRest = [1, 2, 3, 4, 5, 6]
const [h, i, ...j] = trialArrayRest

const ObjectRest = {
    name: "Adam",
    age: 12,
    sex: 0,
    values: {
        test1: 2,
        test2: 3,
    }
}
const {k, ...l} = ObjectRest

// Function
function destructuringParam({name}) {
    return name
}
const trialDestructureParam = destructuringParam(ObjectRest)

function destructuringParamNested({name, values: {test1, test2}}) {
    return name
}
const trialDestructureParamNested = destructuringParamNested(ObjectRest)
