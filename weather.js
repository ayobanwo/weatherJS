class Weather{
	constructor(city, state){
		this.apiKey = ';c7bed5a4cc14490cb272880e3adbf4a3';
		this.city = city
		this.state = state;
	}

	// Fetch weather from API
	async getWeather(){
		const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}`); 

		const responseData = await response.json();

		return responseData;

	}

	//Change weather location
	changeLocation(city, state) {
		this.city =city;
		this.state = state;
	}
}