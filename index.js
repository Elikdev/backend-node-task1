const http = require("http");

const server = http.createServer((req, res) => {
	res.write("Hello World, welcome to WeJapa internships");
	res.end();
});

server.listen(3000, () => {
	console.log("server listenening on port 3000");
});
