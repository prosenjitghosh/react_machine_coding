import { useState } from 'react'
import './App.css'
import { DebounceDemo } from './examples/DebounceDemo'
import { ThrottleDemo } from './examples/ThrottleDemo'
import { CounterDemo } from './examples/CounterDemo'
import { Accordion } from './component/Accordian'
import { ThemeToggleDemo } from './examples/ThemeToggleDemo'
import { ProgressBar } from './examples/ProgressBarDemo'
import { TodoList } from './component/TodoList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DebounceDemo /> */}
      {/* <ThrottleDemo /> */}
      {/* <CounterDemo /> */}
      {/* <Accordion /> */}
      {/* <ThemeToggleDemo /> */}
      {/* <ProgressBar /> */}
      <TodoList />
    </>
  )
}

export default App
