// Built in modules, modules that we have access to from nodejs.
// there are many modules, you can find info on them here:
// https://nodejs.org/dist/latest-v16.x/docs/api/

// Here are a few popular ones
// OS, PATH, FS, HTTP

//Becasue these are built in, we do not need to install anything, and 
//we do not preclude the require path with ./

const os = require('os') //gives us info about the operating system

const user = os.userInfo()
console.log(user)

console.log(`The system up time is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS);

const path = require('path') // gives us info about path where this module is located

console.log( path.sep )

const filePath = path.join('/content','subfolder', 'test.txt') 
console.log(filePath) //create path, starting from current folder
console.log( path.basename(filePath)) //get just the file name from a path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') 
console.log(absolute) // returns an absolute path



