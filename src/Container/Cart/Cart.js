import React, { useEffect, useState } from "react";
import { useCart } from 'react-use-cart'
import { useHistory } from "react-router-dom"
import './Cart.css'


const Cart = () => {
    const history = useHistory();
    const [localItems, setLocalItems] = useState(localStorage.getItem('local'))
    useEffect(() => {
        if (!localItems) {
            history.push("/form");
        }
    }, [localItems])


    const {
        isEmpaty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpaty) return <h1 className="text-center">Your Cart Is Empty</h1>;
    const buyNow = () => {
        if (cartTotal === 0) {
            alert("Please Check Item")
        } else {
            alert('Done')
        }
    }




    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className="col-12">
                    <h5>Cart :({totalUniqueItems}) total Items:({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        {
                            items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>Quntity : {item.quantity}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >-</button>
                                            <button
                                                className="btn btn-warning ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >+</button>
                                            <button
                                                className="btn btn-warning ms-2"
                                                onClick={() => removeItem(item.id)}
                                            >Remove Item</button>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2 className="total">Total Price : ${cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger ms-2"
                        onClick={() => emptyCart()}>
                        Clear Cart
                    </button>
                    <button className="btn btn-primary m-2" onClick={() => buyNow()}>Buy Now</button>
                </div>
            </div>
        </section>
    )
}
export default Cart;