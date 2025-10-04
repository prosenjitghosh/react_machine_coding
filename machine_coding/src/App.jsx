import { useState } from 'react'
import './App.css'
import { DebounceDemo } from './examples/DebounceDemo'
import { ThrottleDemo } from './examples/ThrottleDemo'
import { CounterDemo } from './examples/CounterDemo'
import { Accordion } from './component/Accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DebounceDemo /> */}
      {/* <ThrottleDemo /> */}
      {/* <CounterDemo /> */}
      <Accordion />
    </>
  )
}

export default App
