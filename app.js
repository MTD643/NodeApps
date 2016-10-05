var profile = require('./profile.js');
var lang = process.argv[2];
var users = process.argv.slice(3);

if (!lang) {
	console.log("Missing third argument (course category) - Please follow the pattern: 'node' 'app.js' 'treehouse course category' 'treehouse username'");
}
else if(users.length == 0){
	console.log("Missing fourth argument (username) - Please follow the pattern: 'node' 'app.js' 'treehouse course category' 'treehouse username'");
}
else{
	users.forEach(function(username, language){
		profile.get(username, lang);
	});
}