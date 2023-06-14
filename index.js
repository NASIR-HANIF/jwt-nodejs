const http = require("http");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const secretkey = crypto.randomBytes(10).toString('hex');
// secret key ko database me save karen gey or dubara verify karen gey
// predefine node module make a strong key password ya secret key 

// console.log(crypto.randomBytes(10).toString('hex'))

// 'hex'   nahi den gey to simble de ga
// jo number den gey us ko 4*2 = 8 number de ga or string or hex ka matlab 
// hex code de ga numaric or alfabets number mila ke de ga
const server = http.createServer((request, response) => {
    const resmessage = jwt.sign(   //  json.stringyfy ki jagha jwt.sign dena ho ga 
        {
            message: "hello i am response",
            data: {
                name: "nasir hanif",
                roll: 12345,
                dob: "20-5-2023"
            }
        },
        secretkey  // secren key apni marzi ka number
    );
    response.writeHead(200, {
        "Content-Type": "application/json"
    })
    response.write(resmessage);
    response.end()
})
server.listen(8080);