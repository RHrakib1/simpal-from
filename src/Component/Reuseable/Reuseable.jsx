import React from 'react';

const Reuseable = ({ fromtitle, submitheandle, submitText = 'submit', children }) => {
    const hendlestateFrom = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        submitheandle(data)
    }

    return (
        <div>

            <form onSubmit={hendlestateFrom}>
                <h2>{fromtitle}</h2>
                {children}
                <input type="text" name='name' /><br />
                <input type="email" name='email' /><br />
                <input type="password" name='password' required /><br />
                <input type="submit" value={submitText} />
            </form>
        </div>
    );
};

export default Reuseable;