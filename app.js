//Init weather obj
const weather = new Weather('London', 'uk');

// Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
	weather.getWeather()
		.then(results => {
			console.log(results);
		})
		.catch(err => console.log(err));
}