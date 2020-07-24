const http = require("http");

const server = http.createServer((req, res) => {
	if (req.method === "GET" && req.url === "/") {
		res.writeHead("200", { "Content-Type": "text/plain" });
		res.write("Hello World, welcome to WeJapa Internships");
		res.end();
	} else {
		res.writeHead("404", { "Content-Type": "text/plain" });
		res.write("Page not found");
		res.end();
	}
});

const port = 3000;
server.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
