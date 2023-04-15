import React, { useContext, useState } from 'react'
import weatherContext from './Context/weatherContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const context = useContext(weatherContext)
    const { cityName, setCityName, weatherData, setWeatherData } = context
    const [errorMsg, setErrorMsg] = useState("")

    const [isLoading, setLoading] = useState(false)

    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

    const fetchWeather = async (event) => {
        try{
            if(event.key === "Enter"){
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
                if(res.data.cod === 200){
                    setWeatherData({
                        ...weatherData,
                        weatherIcon: res.data.weather[0].icon,
                        temprature: Math.floor(res.data.main.temp),
                        weatherName: res.data.weather[0].description,
                        weatherCityName: res.data.name,
                        countryName: regionNames.of(`${res.data.sys.country}`),
                        feelsLikeTemp: Math.floor(res.data.main.feels_like),
                        humidity: Math.floor(res.data.main.humidity)
                    })
                    navigate("/Weather")
                    setCityName("")
                }
            }
        }
        catch(error){
            setErrorMsg("Please enter a valid city name")
            setTimeout(() => {setErrorMsg("")}, 3000)
        }
    }

    const getDeviceLocationAndFetch = async () => {
        setLoading(true)
        navigator.geolocation.getCurrentPosition(async function(position) {
            const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`

            const res = await axios.get(apiCall)

            setWeatherData({
                ...weatherData,
                weatherIcon: res.data.weather[0].icon,
                temprature: Math.floor(res.data.main.temp),
                weatherName: res.data.weather[0].description,
                weatherCityName: res.data.name,
                countryName: regionNames.of(`${res.data.sys.country}`),
                feelsLikeTemp: Math.floor(res.data.main.feels_like),
                humidity: Math.floor(res.data.main.humidity)
            })
        })
        setLoading(false)
        navigate("/Weather")
    }

  return (
    <div className="App bg-bgColor flex justify-center items-center min-h-screen font-tahoma">
        <div className="card bg-white rounded-md h-fit w-96">
          <div className="cardHeader border-b border-b-[#808080]">
            <p className="px-6 py-4 text-bgColor font-bold text-2xl">Weather App</p>
          </div>
          <div className="cardBody px-6 py-6 space-y-3">
            <div className="input text-center space-y-1">
              <input type="text" value={cityName} onChange={event => setCityName(event.target.value)} onKeyDown={fetchWeather} placeholder="Enter city name" className="border border-[#808080] px-1 py-3 rounded-lg focus:outline-none text-[#808080] text-center text-lg w-full" />
              <p className="text-left text-red-600 px-3">{errorMsg}</p>
            </div>
            <div className="content">
              <p className="or text-[#808080]">or</p>
            </div>
            <div className="deviceLocationBtn text-center bg-bgColor rounded-lg">
              <button className="w-full px-1 py-3 text-white focus:text-white focus:outline-none font-medium rounded-lg text-lg" onClick={getDeviceLocationAndFetch}>{isLoading ? <>Getting device location ...</> : <>Get device location</>}</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
