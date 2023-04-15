import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Weather from "./Components/Weather"
import Home from "./Components/Home"
import PageNotFound from "./Components/PageNotFound"


function App() {
  return (
    <div className="App bg-bgColor flex justify-center items-center min-h-screen font-tahoma">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Weather" element={<Weather />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
