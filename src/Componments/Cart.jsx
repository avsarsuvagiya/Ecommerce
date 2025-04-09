import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { clearcart, decreaseQuantity, increaseQuantity, removecart } from '../Slice/cart';

const Cart = () => {
    const cartItem = useSelector((state) => state.carttab.item);
    const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
    const dispatch = useDispatch();

    const handleRemove = (index) => {
        dispatch(removecart(index));
    };

    return (
        <div className="text-center">
            <Header />
            <div className="container my-4">
                {/* Desktop Table Layout */}
                <div className="d-none d-md-block">
                    <table className="table table-dark table-striped text-white text-center align-middle">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItem.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="text-break">
                                        {item.title.length > 15 ? item.title.substring(0, 15) + '...' : item.title}
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => dispatch(decreaseQuantity(index))}>−</button>
                                            <span>{item.quantity}</span>
                                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => dispatch(increaseQuantity(index))}>+</button>
                                        </div>
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm w-100" onClick={() => handleRemove(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card Layout */}
                <div className="d-block d-md-none">
                    {cartItem.map((item, index) => (
                        <div key={index} className="bg-dark text-white p-3 mb-3 rounded shadow-sm">
                            <h5>{item.title.length > 15 ? item.title.substring(0, 15) + '...' : item.title}</h5>
                            <p><strong>Price:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span><strong>Quantity:</strong></span>
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-sm btn-outline-light me-2" onClick={() => dispatch(decreaseQuantity(index))}>−</button>
                                    <span>{item.quantity}</span>
                                    <button className="btn btn-sm btn-outline-light ms-2" onClick={() => dispatch(increaseQuantity(index))}>+</button>
                                </div>
                            </div>
                            <button className="btn btn-danger btn-sm w-100" onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    ))}
                </div>

                <h4 className="my-3">Total: ${totalPrice.toFixed(2)}</h4>

                {cartItem.length > 0 && (
                    <button className="btn btn-warning my-2" onClick={() => dispatch(clearcart())}>
                        Clear Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default Cart;
