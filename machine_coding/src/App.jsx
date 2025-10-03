import { useState } from 'react'
import './App.css'
import { DebounceDemo } from './examples/DebounceDemo'
import { ThrottleDemo } from './examples/ThrottleDemo'
import { CounterDemo } from './examples/CounterDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DebounceDemo /> */}
      {/* <ThrottleDemo /> */}
      <CounterDemo />
    </>
  )
}

export default App
