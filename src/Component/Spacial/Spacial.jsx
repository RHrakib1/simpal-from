import React, { useContext } from 'react';
import { giftContext } from '../Grandpa/Granpa';

const Spacial = ({ spacialsecd }) => {
    const gift =useContext(giftContext)
    return (
        <div>
            <h2>spacial</h2>
            <p>{spacialsecd}</p>
            <small>context: {gift }</small>
        </div>
    );
};

export default Spacial;