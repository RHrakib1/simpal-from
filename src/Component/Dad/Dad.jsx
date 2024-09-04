import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dad = ({grandpaAsset}) => {
    return (
        <div className="color">
            <h2>Dad</h2>
            <section className="flex">
                <Myself MyselfAsset={grandpaAsset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;