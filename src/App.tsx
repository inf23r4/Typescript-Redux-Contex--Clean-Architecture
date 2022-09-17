import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home></Home>
    </div>
  )
}

export default App
