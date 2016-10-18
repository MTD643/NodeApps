var router = require("./router.js");

//Problem: We need a simple way to look at a users badge count and JavaScript points from a web browser
//Solution: Use Node.js to perform the profile lookups and serve our template via HTTP

//1.	Create a web server

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
	router.home(request, response);
	router.user(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//4.	Function that hanles the reading of files and merge in values
	// read from file and get a string
		//merge values in to string