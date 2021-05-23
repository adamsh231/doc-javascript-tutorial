function showName(callbackFunction){
    const name = prompt("What is your name?")
    callbackFunction(name)
}

//1
function hello(name){
    alert(name)
}
showName(hello)

//2
showName(function(name){
    alert(name)
})

//3
showName(name => alert(name))


// callback open api http://www.omdbapi.com/
