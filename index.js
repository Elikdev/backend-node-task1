const http = require("http");

const server = http.createServer((req, res) => {
	res.write("Hello World, welcome to WeJapa Internships");
	res.end();
});

const port = 3000;
server.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
