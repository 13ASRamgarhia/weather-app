import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import weatherContext from './Context/weatherContext'

import feelsLikeIMG from "../Assets/feelsLikeIMG.png"
import humidityIMG from "../Assets/humidityIMG.png"

const Weather = () => {
  const context = useContext(weatherContext)
  const { weatherData } = context
  return (
    <div className="App bg-bgColor flex justify-center items-center min-h-screen font-tahoma">
        {
          weatherData.weatherName ?

          <div className="card bg-white rounded-md h-fit w-80">
          <div className="cardHeader flex items-center border-b border-b-[#808080]">
            <div className="flex px-6 py-4 items-center space-x-2">
            <Link to="/"><Icon name="arrow left" size="large" className='text-bgColor' /></Link>
            <p className="text-bgColor font-bold text-2xl">Weather App</p>
            </div>
          </div>
          <div className="cardBody px-6 py-6 space-y-3 flex flex-col items-center">
            <div className="iconDiv">
              <img src={`https://openweathermap.org/img/w/${weatherData.weatherIcon}.png`} alt="Weather Icon" className='aspect-square w-24'/>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
              <p className="font-semibold text-5xl text-center">{weatherData.temprature} &#176;C</p>
              </div>
              <p className="text-xl">{weatherData.watherName}</p>
              <div className="flex items-center my-auto"><div className="flex -mt-2"><Icon name="map marker alternate" /></div><p className="text-xl">{weatherData.weatherCityName}, {weatherData.countryName}</p></div>
            </div>
          </div>

          <div className="cardFooter">
            <div className="flex">
              <div className="w-[50%] flex justify-center border-t border-r border-t-[#808080] border-r-[#808080] py-4 space-x-1">
                <div className='flex my-auto'>
                  <img src={feelsLikeIMG} alt="icon" className='aspect-square w-8'/>
                </div>
                <div className="flex flex-col">
                  <div><p className="text-xl">{weatherData.feelsLikeTemp} &#176;C</p></div>
                  <div><p className="text-sm">Feels like</p></div>
                </div>
              </div>
              <div className="w-[50%] flex justify-center border-t border-t-[#808080] py-4 space-x-1">
                <div className='flex my-auto'>
                  <img src={humidityIMG} alt="icon" className='aspect-square w-8'/>
                </div>
                <div className="flex flex-col">
                  <div><p className="text-xl">{weatherData.humidity} %</p></div>
                  <div><p className="text-sm">Humidity</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="card bg-white rounded-md h-fit w-80">
          <div className="flex flex-col px-6 py-4 items-center space-y-4">
          <p className="text-xl">No weather searched !</p>
          <Link to="/" className='text-white focus:text-white hover:text-white focus:outline-none font-medium rounded-lg text-lg'><div className=" text-center bg-bgColor rounded-lg px-3 py-1">Go back</div></Link>
          </div>
        </div>
        }
    </div>
  )
}

export default Weather
