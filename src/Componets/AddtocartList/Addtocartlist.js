import React, { useState } from "react";
import { useCart } from 'react-use-cart'

const AddtocartList = (props) => {
    const { addItem } = useCart();
    

    return (
        <>
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div classname="card p-0 h-100 shadow">
                    <img src={props.img} className="card-img-top img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h5 className="card-text">${props.price}</h5>
                        <h5 className="card-text">{props.desc}</h5>
                        <button href="#" className="btn btn-primary" onClick={() => addItem(props.item)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddtocartList;