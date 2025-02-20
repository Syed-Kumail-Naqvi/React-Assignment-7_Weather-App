import axios from 'axios';
import { useState } from 'react'

export default function Weather(){

    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }
    
    const fetchWeather = async() => {

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'3976dc4bb9916bdfffac93e9b414354f'}`)
            console.log(response);
            setWeather(response);  
        }
        
        catch(error) {
            alert('not found', error);
        }   
            
    }
     
    
    const handleWeather = () => {
        fetchWeather();  
    }

    return (
        <div className='weather-container'>
            <h1>Weather App</h1>
            <input type="text" placeholder="Enter City Name" value={city} onChange={handleCityChange} /> <br />
            <button onClick={handleWeather}>Get Weather</button>

            {weather && <>
                <div className='weather-info'>
                    <h3>{weather.data.name}</h3>
                    <p>Temperature is {weather.data.main.temp}C</p>
                    <p>{weather.data.weather[0].description}</p>               
                </div>
            </>}
        </div>
    )
}