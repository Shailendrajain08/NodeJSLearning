const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
    console.log("You entered: ", name);
    rl.close()
})