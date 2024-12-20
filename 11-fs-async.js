const {readFile,writeFile} = require('fs')

// Same with the above
// const fs = require('fs')
// fs.readFile
// fs.writeFile
console.log("Task Started")
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',
            `Here is the result : ${first} , ${second}`,
            (err,result)=>{
                if(err)
                {
                    console.log(err)
                    return
                }
                console.log("File Written")
            }
        )
    
    })

})

console.log("Next Task")

// CALLBACK FUNCTION IS NEED FOR ASYNC FS Functions
// (err,result)=>{
//     if(err)
//     {
//         console.log(err)
//         return
//     }
//     console.log("File Written")
// }