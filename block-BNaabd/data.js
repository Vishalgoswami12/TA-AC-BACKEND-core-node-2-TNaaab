var http=require("http");
var qs=require("querystring");
var os=require("os");
var server=http.createServer(handleRequest);

function handleRequest(req,res){
    var dataFormat=req.headers['content-type'];
    var store="";
    req.on("dat",(chunk)=>{
        store=store+dataFormat;
    })
    req.on('end',()=>{
        if(dataFormat==='apllication/JSON'){
        var parsedData=JSON.parse(store);
        res.end(store);
        }
        if(dataFormat==='application/x-www-form-urlencoed'){
            var parsedData=qs.parse(store);
            res.end(JSON.stringify(parsedData))
        }
    })
}

server.listen(7000,()=> {
    console.log('server is listnig on port 7000');
   });