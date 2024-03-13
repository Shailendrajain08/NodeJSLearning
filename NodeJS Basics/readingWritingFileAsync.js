const readline = require("readline");
const fs = require("fs");

fs.readFile("./File/start.txt", "utf-8", (error, data) => {
  if (data) {
    console.log(data);
    fs.readFile(`./File/${data}.txt`, "utf-8", (err, res) => {
      if (res) {
        console.log(res);
        fs.readFile("./File/append.txt", "utf-8", (err2, res2) => {
            if(res2){
                console.log(res2);
              fs.writeFile("./File/clear.txt", `${res}\n\n${res2}\n\n Data Created ${new Date()}`, () =>{
                console.log('File Written Successfully')
              })  
            }
            else{
                console.log(err2)
            }
        })
      } else {
        console.log(err);
      }
    });
  } else {
    console.log(error);
  }
});
