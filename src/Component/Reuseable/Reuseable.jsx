import React from 'react';

const Reuseable = ({ fromtitle, submitText }) => {
    const hendlestateFrom = e => {
        e.preventDefault()
    }

    return (
        <div>

            <form onSubmit={hendlestateFrom}>
                <h2>{fromtitle}</h2>
                <input type="text" name='name' /><br />
                <input type="email" name='email' /><br />
                <input type="password" name='password' required /><br />
                <input  type="submit" value={submitText} />
            </form>
        </div>
    );
};

export default Reuseable;