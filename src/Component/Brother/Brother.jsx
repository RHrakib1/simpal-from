import React, { useContext, useState } from 'react';
import { moneyContext } from '../Grandpa/Granpa';

const Brother = () => {
    const [money, setmoney] = useContext(moneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <small>{money}</small>
            <button onClick={() => setmoney(money + 300)}>add 400 tk</button>
        </div>
    );
};

export default Brother;