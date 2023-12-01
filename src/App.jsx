import {CssBaseline, ThemeProvider} from '@mui/material'
import {createContext, useState} from 'react'

import Presentation from './components/Presentation'
import {theme} from './assets/theme'

export const IndexContext = createContext()

function App() {
  const storedIndex = localStorage.getItem('slideIndex')
  const [index, setIndex] = useState(parseFloat(storedIndex))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IndexContext.Provider value={{index, setIndex}}>
        <Presentation />
      </IndexContext.Provider>
    </ThemeProvider>
  )
}

export default App
