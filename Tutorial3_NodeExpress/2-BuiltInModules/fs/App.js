// FS, gives us info about the file system, and allows us to read/write from
// and to files. they can be ran in sync (blocking) or async (not blocking)

// synchronous
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync( './content/first.txt', 'utf8')
const second = readFileSync( './content/second.txt', 'utf8')

console.log( first, second)

//when writting a file, by default, nodejs with create that file if it does not exist
writeFileSync( // this will overwite whatever is in the file
  './content/result-sync.txt', 
  `Here is the result ${first}, ${second}`
)

writeFileSync( // this will append whatever is in the file
  './content/result-sync.txt', 
  `\nHere is the result ${first}, ${second}`,
  {flag: 'a' }  //append flag
)

// asynchronous
// reading is done async, and when complete, a callback function is supplied
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, res) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(res)

  writeFile( 
    './content/result-async.txt',
    `Here is the result: ${first}, ${second}`,
    (err, res) => {
      if( err ){
        console.log(err)
        return
      }
  
      console.log(res)
    }
  )
})

