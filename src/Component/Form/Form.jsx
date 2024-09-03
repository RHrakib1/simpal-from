import React from 'react';

const Form = () => {
    const hendleclick = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('submited');
    }
    return (
        <div>
            <form onSubmit={hendleclick}>
                <input type="text" name='name'/><br />
                <input type="number" name='phone'/><br />
                <input type="email" name='email'/><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;