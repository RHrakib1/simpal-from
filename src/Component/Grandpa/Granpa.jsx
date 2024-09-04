import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";
import Uncel from "../Uncel/Uncel";
import '../Grandpa/Granpa.css'
import { createContext, useState } from "react";

export const giftContext = createContext('gold')
export const moneyContext = createContext(1000)


const Granpa = () => {
    const asset = "diamond ring"
    const [money,setmoney]=useState(400)

    return (
        <div className="color">
            <h2>Granpa</h2>
            <p>net tk: {money}</p>
            <moneyContext.Provider value={[money,setmoney]}>
                <giftContext.Provider value="gd">
                    <section className="flex ">
                        <Dad grandpaAsset={asset}></Dad>
                        <Uncel></Uncel>
                        <Anty sendGrand={asset}></Anty>
                    </section>
                </giftContext.Provider>
            </moneyContext.Provider>
        </div>
    );
};

export default Granpa;