import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header';
import { removecart } from '../Slice/cart';


const Cart = () => {

    const cartItem = useSelector((state) => state.carttab.item)

    const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);

    const dispatch = useDispatch();

    function hanleremove(i) {
        dispatch(removecart(i))
    }

    return (
        <div className='text-center'>
            <Header />
            <table className="table table-dark table-striped text-white container my-2">
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
                    {
                        cartItem.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td><button className="btn btn-danger" onClick={() => hanleremove(i)}>Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


            <h3>Total Bill is : {totalPrice}</h3>
        </div>

    )
}

export default Cart
