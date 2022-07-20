import HomePage from './views/homePage/index.jsx'
import LandingPage from './views/landingPage/index.jsx'
import  { React, useState } from 'react'
import { StartContext } from './context/context.js'

function App() {

  const [startPage, setStartPage] = useState('landing')
  const startValue = {
    updateState: setStartPage
  }
  return (
      <>
      <StartContext.Provider value={startValue} >
        {
          startPage === 'landing' ?
          <LandingPage /> :
          <HomePage />
        }
      </StartContext.Provider>
      </>
  )
}

export default App
