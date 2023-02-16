// console.log("hello world");

// this window can run only on the console of web page. It can not run on the backend
// console.log(window);

// const a =400;
// const b =500;
// const c = ("hello world");
// const d= false;

// console.log(a,b,c,d);
// module.exports=a;
// module.exports=b;
// module.exports=c;
// module.exports=d;

// const obj=
// {
//     avg:(a,b)=>{
//         console.log((a+b)/2);
//     },

//     percent:(a,b)=>{
//         console.log((a/b)*100);
//     },
// }

// module.exports=obj;

// it is a built in module: built in modules are those modules that are not downloaded. We can use them by direct importing them like file system. However, the modules that need to be downloaded before we can use them are known as file based module. The example of file based module include "express framework"
// const fs =require("fs");
// console.log(fs);
// fs.readFile("./sample.txt",(err,data)=>{
//     if(err)
//     {
//         return err;
//     }
//     console.log(data);
// })

// modern way to import file system
// const fs =require("fs");
// console.log(fs);

// we use utf-8 to read text
// readFile is an asynchronous function
// asynchronous function is a function whose execution does not effect the execution of other function. Asynchronous function are executed at the end
// fs.readFile("./sample.txt","utf-8",(err,data)=>{
//     if(err)
//     {
//         return err;
//     }
//     console.log(data);
// })

// console.log("I am first")

// fs.readFile("./sample.txt","utf-8",(err,data)=>
// {
    //     if(err)
    //     {
        //         throw err;
        //     }
        //     console.log(data);
        // })
        // console.log("I am abdul Wahid baby I am first you are asynchronous and i am synchronous");
        
// now we will make the above function synchronous
// synchronous functions are the functions that execute first

// console.log("Now i am second because you are synchronous")
// const a=fs.readFileSync("./sample.txt","utf-8");
// console.log(a);

// In read file you have to make a file first
// after that you read the data from it

// writeFile
// in write file you create a file by writing a code
// write file can also be synchronous and asynchronous
// fs.writeFile("./sample2.txt","Hey brother I have created a file using code hahaha",()=>
// {
//     console.log("Written")
// });
// console.log("I am first");

// const a="Hey brother I have created a file using code hahaha";
// fs.writeFile("./sample3",a,()=>{
//     console.log("Written")
// })
// console.log("I am first")

// fs.writeFileSync("./sample2.txt","This is updated file",()=>{
//     console.log("updated")
// })

// another builtin module "path"
// const path=require("path");
// const a=path.extname("/node/index.js");
// console.log(a);

// const a=path.basename("C:/Users/Abdul Wahid/Desktop/web development work/NODE>")
// console.log(a);


// const a=path.dirname("C:/Users/Abdul Wahid/Desktop/web development work/NODE>")
// console.log(a);

// const b="newfile"
// const a=path.join("C:/Users/Abdul Wahid/Desktop/web development work/NODE>"+b)
// console.log(a)

// const os=require("os");
// const a=os.freemem();
// console.log(a)
// console.log(os.freemem())
// console.log(os.hostname())
// console.log(os.totalmem())
// console.log(os.homedir())
// console.log(os.machine())

// third party module pokemon
// const pokemon=require("pokemon")
// console.log(pokemon.all())
// console.log(pokemon.random())

// nodemon another third party module
// we can use nodemon in place of node dirctly in the console

// third party modules are those modules that are written

// http is an important module
// http is used to create a server
// request: it is simply the url that we write in google and send a request to the server
// response: the google respond by providing an interface to the user
// next is a call back function, it is used when there are multiple files and 
const fs=require("fs");
const a=fs.readFileSync("./index.html","utf-8")
const http=require("http")


const server=http.createServer((request,response,next)=>
{
    // console.log(request.url);
    // response.end("<h1>WORKING</h1>")
    if(request.url==="/")
    {
        // response.end("<h1>HOME PAGE</h1>")
        return response.end(a);
    }
    else if(request.url==="/about")
    {
        return response.end("<h1>ABOUT PAGE</h1>")
    }
    else if(request.url==="/contact")
    {
        return response.end("<h1>CONTACT PAGE</h1>")
    }
    else if(request.url==="/services")
    {
        return response.end("<h1>SERVICES</h1>")
    }
    else 
    {
        return  response.end("<h1>ERROR 404 PAGE NOT FOUND</h1>")
    }
})

// this is basically the connection
// we have given the port number, hostname and a call back function in which we have given the link
// it is a better practice that you give the port number and the hostname in the variable
const port=2000;
const hostname="localhost";

server.listen(port,hostname,()=>
{
    console.log(`server is working on http://${hostname}:${port}`)
})