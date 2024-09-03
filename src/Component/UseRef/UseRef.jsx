import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const nameref = useRef(null)
    const emailref = useRef(null)
    const passwordref = useRef(null)
    const [password, setpassword] = useState('')
    const hendleclick = e => {
        e.preventDefault()
        if (password.length < 6) {
            setpassword('please 6 leatter minimum')

        }
        else {
            setpassword('')
        }
        console.log(nameref.current.value);
        console.log(emailref.current.value);
        console.log(passwordref.current.value);
    }
    useEffect(() => {
        nameref.current.focus()
    }, [])


    return (
        <div>
            <form onSubmit={hendleclick}>
                <input ref={nameref} type="text" name='name' /><br />
                <input ref={passwordref} type="password" name='password' /><br />
                <input ref={emailref} type="email" name='email' /><br />
                <input type="submit" value="submit" />
                {
                    password && <p>{password}</p>
                }
            </form>
        </div>
    );
};

export default UseRef;