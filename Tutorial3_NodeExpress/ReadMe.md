# Node and Express tutorial

- Followed [this](https://www.youtube.com/watch?v=Oe421EPjeBE&ab_channel=freeCodeCamp.org) youtube tutorial: 
- [Gihub](https://github.com/john-smilga/node-express-course)

## Intro 

NodeJS is environmnet to run javascript outside of the browser. It was built in 2009, on top of
Chrome's V8 JS engine. It has a large community and can be used full-stack (both front end and backend)

Download the installer [here](https://nodejs.org/en/download/)

We can run our JS code on NodeJS in two ways
- REPL: Read-Eval-Print-Loop, similar to shell, useful for quick/simple testing
- CLI: command line interface, coding/command promt, for application building

## Globals

| Name | Description |
| ----------- | ----------- |
| __dirname | path to directory |
| __filename | file name |
| require | function to use modules (CommonJS)
| module | info about current module (file)
| process | info about the environment where the rogram is being executed |

## Modules

Encapsulated code, only share minimum. Every file in Node is a module.

Run a module by navigating to the parent folder in terminal, then use command
`node app.js`

### Built in Modules
There are many, review the [docs](https://nodejs.org/dist/latest-v16.x/docs/api/) 