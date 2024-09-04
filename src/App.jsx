import { createContext, useState } from 'react'
import './App.css'
import Reuseable from './Component/Reuseable/Reuseable'
import Granpa from './Component/Grandpa/Granpa'
// import UseRef from './Component/UseRef/UseRef'
// import UseStateFrom from './Component/UseStateFrom/UseStateFrom'
// import Form from './Component/Form/Form'

function App() {
  const [count, setCount] = useState(0)
  const singup = e => {
    console.log('sing up data', e);

  }
  const update = e => {
    console.log('update data', e);

  }


  return (
    <>
      <h1>Vite + React</h1>
      {/* <UseStateFrom></UseStateFrom> */}
      {/* <Form></Form> */}
      {/* <UseRef></UseRef> */}
      <Reuseable submitheandle={singup} fromtitle={'sing up now'} >
        <div>
          <small>please sing up hear</small>
        </div>
      </Reuseable>
      <Reuseable submitheandle={update} fromtitle={'update now'} submitText={"Update"}>
        <div>
          <small>please update profile hear</small>
        </div>
      </Reuseable>

      <Granpa></Granpa>
    </>
  )
}

export default App
