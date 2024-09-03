import React, { useState } from 'react';

const UseStateFrom = () => {
    const [name, setname] = useState(null)
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const hendlestateFrom = e => {
        e.preventDefault()
        console.log(name, email, password);

    }
    const namehendle = (e) => {
        // console.log(e.target.value);
        setname(e.target.value)
    }
    const emailhandle = e => {
        // console.log(e.target.value);
        setemail(e.target.value)
    }
    const passwordheandl = e => {
        // console.log(e.target.value);
        setpassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={hendlestateFrom}>
                <input onChange={namehendle} type="text" name='name' placeholder='enter your name' /><br />
                <input onChange={emailhandle} type="email" name='email' placeholder='enter your email' /><br />
                <input onChange={passwordheandl} type="password" name='password' placeholder='enter your valid password' /><br />
                <input type="submit" value="submit" />
            </form>


        </div>
    );
};

export default UseStateFrom;