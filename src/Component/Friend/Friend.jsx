import { useContext } from "react";
import { giftContext } from "../Grandpa/Granpa";

const Friend = () => {
    const giftFd=useContext(giftContext)
    return (
        <div>
            <h2>Friend</h2>
            <h6>{giftFd}</h6>

        </div>
    );
};

export default Friend;