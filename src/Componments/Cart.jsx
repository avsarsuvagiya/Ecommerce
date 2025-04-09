import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header';
import { clearcart, decreaseQuantity, increaseQuantity, removecart } from '../Slice/cart';

const Cart = () => {
    const cartItem = useSelector((state) => state.carttab.item);

    const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);

    const dispatch = useDispatch();

    function handleRemove(index) {
        dispatch(removecart(index));
    }

    return (
        <div className='text-center'>
            <Header />
            <div className="container my-4">
                <div className="table-responsive">
                    <table className="table table-dark table-striped text-white text-center">
                        <thead>
                            <tr>
                                <th>ProductId</th>
                                <th>ProductName</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItem.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="text-break">{item.title.length > 5 ? item.title.substring(0, 15) + '...' : item.title}</td>
                                    <td>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button
                                                className="btn btn-sm btn-outline-secondary me-2"
                                                onClick={() => dispatch(decreaseQuantity(index))}
                                            >-</button>
                                            <span>{item.quantity}</span>
                                            <button
                                                className="btn btn-sm btn-outline-secondary ms-2"
                                                onClick={() => dispatch(increaseQuantity(index))}
                                            >+</button>
                                        </div>
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm w-100"
                                            onClick={() => handleRemove(index)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total Bill is : ${totalPrice.toFixed(2)}</h3>
                    {cartItem.length > 0 && (
                        <button className="btn btn-warning my-3" onClick={() => dispatch(clearcart())}>
                            Clear Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
