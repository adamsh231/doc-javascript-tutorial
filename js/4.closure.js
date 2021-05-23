function greeting(time) {
    return function hello(name) {
        console.log(`Hello ${name}, Good ${time}!`);
    }
}

let greetingTimeInnerFunction = (function (time){
    return function hello(name){
        console.log(`Hello ${name}, Good ${time}!`);
    }
})("time")

let goodMorning = greeting("Morning");
let goodEvening = greeting("Evening");
let goodNight = greeting("Night");

let goodMorningInnerFunction = greeting("Morning")("Inner Function")
let goodTimeInnerFunction = greetingTimeInnerFunction("Inner Function")

let sayAdam = goodMorning("Adam")
let sayFaiz = goodEvening("Faiz")
let sayNana = goodNight("Nana")
