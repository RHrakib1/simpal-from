import { useState } from 'react'
import './App.css'
import Reuseable from './Component/Reuseable/Reuseable'
// import UseRef from './Component/UseRef/UseRef'
// import UseStateFrom from './Component/UseStateFrom/UseStateFrom'
// import Form from './Component/Form/Form'

function App() {
  const [count, setCount] = useState(0)
  const handlesingup = e => {

    e.preventDefault()
  }
  const handleupdate = e => {
    e.preventDefault()
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <UseStateFrom></UseStateFrom> */}
      {/* <Form></Form> */}
      {/* <UseRef></UseRef> */}
      <Reuseable fromtitle={'sing up now'} submitText={"Submit"}></Reuseable>
      <Reuseable fromtitle={'update now'} submitText={"Update"}></Reuseable>
    </>
  )
}

export default App
