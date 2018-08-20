const request = require('request');

let apikey = 'fecdb5c442c4f003fcd4ce3e3a248953'
let city =  'mumbai'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`

request(url, function (err, response, body) {
	if(err) {
		console.log('error: ', error);
	} else {
		let weather = JSON.parse(body)
		let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
		console.log(message);
	}
});
