import { useState } from 'react'
import './App.css'
//import {DebounceDemo} from './examples/DebounceDemo'
import DebounceDemo from './examples/DebounceDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DebounceDemo />
    </>
  )
}

export default App
