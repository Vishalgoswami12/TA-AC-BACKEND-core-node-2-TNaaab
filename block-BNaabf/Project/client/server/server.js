var http =require("http");
var fs=require("fs");
var qs=require("qs");
var server = http.createServer(handleRequest);

function handleRequest(req,res){
    var store="";
    req.on("data",(chunk)=>{
        store=store+chunk;
    });
    req.on('end',()=>{
        if(req.method==="GET",req.url==="/form"){
            res.setHeader("Contenet-Type","text/html");
            fs.createReadStore("./form.html").pipe(res);
        }
        if(req.method ==='POST' && req.url ==='/form'){
            var parsedData = qs.parse(store);
            res.setHeader('content-Type' ,'text/html');
            var parsedData = qs.parse(store);
            res.write(`<h2>${parsedData.name}</h2>`)
            res.write(`<h3>${parsedData.email}</h3>`)
            res.write(`<p>${parsedData.age}</p>`)
        }
    })
}

server.listen(5678, () => {
    console.log('server is running on port 5678');

})