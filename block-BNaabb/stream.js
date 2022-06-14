var http=require("http");
var {process}=require("process");
var server=http.createServer(handleRequest);

function handleRequest(req,res){
    if(req.method==="POST", req.url==="/"){
    console.log(req.method);
    var store="";
    req.on("data",(chunk)=>{
        store=store+chunk;
    })
    req.on("end",()=>{
        console.log(store);
        res.write(store+"Hello")
        res.end();
    })}
    }
    server.listen(3456,()=>{
        console.log("server listning on 3456")
    })