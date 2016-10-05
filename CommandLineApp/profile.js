//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Use Node.js to connect to Treehouse's API to get profile information to print out

var https = require('https');
var lang = "JavaScript";

//Print out message

function printMessage(name, badgeCount, points){
	var message = name + (" has " + badgeCount + " total badge(s) and " + points + " points in "+ lang +".");
	console.log(message);
}

//Print out error messages

function printError(error){
	console.error(error.message);
}

function get(username, language){
	lang = language;
	//Connect to the API url (https://teamtreehouse.com/mtd643.json)
	var request = https.get("https://teamtreehouse.com/"+ username +".json", function(response){
		var body = "";
		//Read the data
		response.on('data', function(chunk){
			body += chunk;
		});
		response.on('end', function(){
			if(response.statusCode === 200){
				try{
					//Parse the data
					var profile = JSON.parse(body);
					var name = profile.name;
					var points = profile.points[lang];
					if (points>=0) {
						//Print the data
						printMessage(name, profile.badges.length, points);
					}
					else{
						console.log(lang + ' is an unrecognized category. *Case sensitive*');
					}
				} catch(error){
					//Parse error
					printError(error);
				}
			} else{
				printError({message: "There was an error getting the profile for "+ username+". ("+response.statusCode+")"});
			}
		});
	});

	//Connection error
	request.on('error', printError);
}

module.exports.get = get;