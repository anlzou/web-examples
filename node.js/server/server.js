var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, resopne) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request from " + pathname + " received.");

    route(pathname);
    
    resopne.writeHead(200, { "Content-Type": "text/plain" });
    resopne.write("Hello, this is server.");
    resopne.end();
  }

  http.createServer(onRequest).listen(7788);

  console.log(`server run on http:127.0.0.1:7788`);
}

exports.start = start;
