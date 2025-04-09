import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header';
import { removecart } from '../Slice/cart';

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
            <table className="table table-dark table-striped text-white my-2">
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
                            <td>{item.title.length > 5 ? item.title.substring(0, 15) + '...' : item.title}</td>
                            <td>{item.quantity}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button 
                                    className="btn btn-danger" 
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
        </div>
    );
}

export default Cart;
