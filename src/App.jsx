import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UseRef from './Component/UseRef/UseRef'
import UseStateFrom from './Component/UseStateFrom/UseStateFrom'
// import Form from './Component/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <UseStateFrom></UseStateFrom>
      {/* <Form></Form> */}
      {/* <UseRef></UseRef> */}
    </>
  )
}

export default App
