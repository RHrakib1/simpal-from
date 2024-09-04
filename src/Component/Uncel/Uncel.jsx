import Cousin from '../Cousin/Cousin';

const Uncel = () => {
    
    return (
        <div>
            <h2>Uncel</h2>
            <section className='flex'>
                <Cousin name={'hasan'}></Cousin>
                <Cousin name={'rahman'}></Cousin>
            </section>
        </div>
    );
};

export default Uncel;