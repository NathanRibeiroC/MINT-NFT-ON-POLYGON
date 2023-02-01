import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HomePage from './pages/Home/HomePage'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage/>
    </div>
  )
}

export default App
