import React, { useState } from "react";
import weatherContext from "./weatherContext"

const WeatherState = (props) => {
    const [cityName, setCityName] = useState("")
    const [weatherData, setWeatherData] = useState({
        weatherIcon: "",
        temprature: 0,
        weatherName: "",
        weatherCityName: "",
        countryName: "",
        feelsLikeTemp: "",
        humidity: ""
    })

    return(
        <weatherContext.Provider value={{ cityName, setCityName, weatherData, setWeatherData }}>
            {props.children}
        </weatherContext.Provider>
    )
}

export default WeatherState;