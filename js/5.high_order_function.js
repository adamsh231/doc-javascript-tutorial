// high order function
function doJob(job, action){ //param job=string, done=function Callback
    console.log(`doing ${job}`)
    done()
}

function done(){
    console.log(`the job is done!`)
}

function problem(){
    console.log(`the job is not done!`)
}

doJob("change infrastructure", problem)
doJob("change infrastructure", done)
