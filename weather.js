class Weather{
	constructor(city, state){
		this.apiKey1 = 'c7bed5a4cc14490cb272880e3adbf4a3';
		this.apiKey ='fc41fd98f524da93acae573329dc17fa'
		this.city = city
		this.state = state;
	}

	// Fetch weather from API
	async getWeather(){
		// const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}`); 
		const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`); 

		const responseData = await response;

		return responseData;

	}

	//Change weather location
	changeLocation(city, state) {
		this.city =city;
		this.state = state;
	}
}