# [Weather App](https://main--weather-app-v001.netlify.app/)

This is a single page web application developed using `create-react-app` and `Tailwind CSS` which can be used to get current weather update for any city around the world. Click [here](https://main--weather-app-v001.netlify.app/) for live site preview.

> Time taken to develop the app is 3 hours (approx.)

> Below is the snapshot of the app, technologies used, and steps to run the app locally.

![Image](https://github.com/13ASRamgarhia/weather-app/blob/main/sanpshot.jpeg)

## Technologies used

The basic app structure is designed using `React` and `Tailwind CSS`.\
Landing page contains an input search bar which executes on 'Enter' key press. Input search has `validation feature`, which checks if the city name is valid or not. When executed, app makes an API call to `OpenWeatherApp` (technology used to fetch current weather update) and displays the weather updates (response). User has another option to search weather, which is using `Get device location` button which is also on the landing page. When the button is clicked, same process is executed as in the input search bar. API calls are made using `axios`.

The Weather page displays the weather update (response from the API), that is as follows:\
-> Weather Icon\
-> Temprature (in celcius)\
-> City and Country\
-> Feels like temprature (in celcius)\
-> Humidity (in percentage)

The app has a few more features such as `Page not found` page, which is added in the project to prevent the app from crashing when user accidently visits the wrong url. Also, Weather page has an alternative if the user access the weather page directly from the url and without entring the city name to search the weather for. It enhances the user experience.

## Run app on local machine

Anyone can preview the app by clicking on the title (Weather App) at the top of this documentary.
If one wants to run this app on his local machine for developement purpose, he can freely download the source code and start the development.

PRE-REQUISITE: VS Code, Node.js and proficiency in MERN Technologies

Note: If you recently installed Node.js, I would recommend you to restart your pc.

After downloading the app, open it in VS Code and type `npm install` (in the project direcory) in in-built terminal. This will install all necessary dependencies to run the app.
Once all dependecies are installed, run start command `npm start` to run app in development mode.


## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
