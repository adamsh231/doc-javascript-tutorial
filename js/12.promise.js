let fulfilled = true
const promise1 = new Promise((resolve, reject) => {
    if (fulfilled) {
        setTimeout(() => {
            resolve({
                status: "ok!",
                data: [{
                    name: "Adam",
                    age: 20
                }]
            })
        }, 2000)
    } else {
        reject("rejected promises!")
    }
})

const promise2 = new Promise((resolve, reject) => {
    if (fulfilled) {
        setTimeout(() => {
            resolve({
                status: "ok!",
                data: [{
                    name: "Adam",
                    age: 20
                }]
            })
        }, 2000)
    } else {
        reject("rejected promises!")
    }
})


// call 1
console.log("Start!")
console.log(promise1
    .finally(() => console.log("whatever the result is, finally always running"))
    .then(response => console.log(response))
    .catch(response => console.log("Not Ok! " + response)))
console.log("Done!")


// call 2
console.log("Start!")
console.log(Promise.all([promise1, promise2]).then(response => console.log(response)).catch(response => console.log(response)))
console.log("Done!")


