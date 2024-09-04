import Friend from "../Friend/Friend";

const Cousin = ({ name, sendsin }) => {

    return (

        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <p>{sendsin} </p>
            <section>
                {name === 'siam' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;