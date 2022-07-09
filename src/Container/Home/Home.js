import React, { useState } from 'react'
import AddtocartList from '../../Componets/AddtocartList/Addtocartlist';
import Pizza from '../Pizza/Pizza';
import './Home.css'


const Home = () => {
    const [data, setData] = useState(Pizza);

    const filterItem=(Catg)=>{
        const UpdateItem = Pizza.filter((p) =>{
            return p.title === Catg;
        })
        setData(UpdateItem);

    }

return (
    <>
        <h1 className='text-center mt-3'>All Pizza</h1>
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='m-5 mx-sm-3'>
                    <button className='btn btn-warning mx-sm-3' onClick={() =>filterItem('Margrita')}>Margrita</button>
                    <button className='btn btn-warning mx-sm-3' onClick={() =>filterItem('Burger')}>Burger</button>
                    <button className='btn btn-warning mx-sm-3' onClick={() =>filterItem('Sendvich')}>Sendvich</button>
                    <button className='btn btn-warning mx-sm-3' onClick={() =>filterItem('Vadapav')}>Vadapav</button>
                    <button className='btn btn-warning mx-sm-3' onClick={() =>setData(Pizza)}>All</button>
                </div>
                {
                    data.map((item, index) => {
                        return (
                            <AddtocartList
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        )
                    })

                }
            </div>
        </section>
    </>
)
}
export default Home;