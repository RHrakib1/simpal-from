import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { moneyContext } from '../Grandpa/Granpa';

const Anty = ({ sendGrand }) => {
    const [money, setmoney] = useContext(moneyContext)
    return (
        <div>
            <h2>anty</h2>
            <section className='flex'>
                <Cousin name={'siam'}></Cousin>
                <Cousin name={'sin'} sendsin={sendGrand}></Cousin>
            </section>
            <p>money:{money}</p>
            <button onClick={() => setmoney(money + 200)}>add</button>
        </div>
    );
};

export default Anty;