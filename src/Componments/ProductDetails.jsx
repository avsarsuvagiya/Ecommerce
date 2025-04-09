import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addcart } from '../Slice/cart';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(err => console.error("Product fetch error:", err));
    }, [productId]);

    if (!product) return <div className="text-center mt-5">Loading product...</div>;

    return (
        <div>
            <Header />
            <div className="container mt-4 mb-5">
                <Link to="/" className="btn btn-secondary mb-3">← Back to Home</Link>
                <div className="row">
                    {/* Images Section */}
                    <div className="col-md-6 mb-4">
                        <img
                            src={product.images?.[0]}
                            className="img-fluid rounded shadow-sm w-100"
                            alt={product.title}
                        />
                        <div className="multiimg d-flex flex-wrap mt-3">
                            {product.images?.slice(1, 5).map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    className="img-thumbnail me-2"
                                    alt={`Thumbnail ${idx}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="col-md-6">
                        <h2 className="fw-bold">{product.title}</h2>
                        <p className="text-muted">{product.description}</p>
                        <h4 className="text-success">Rs. {product.price}</h4>
                        <h6><strong>Discount:</strong> {product.discountPercentage}%</h6>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Stock:</strong> {product.stock} available</p>
                        <p><strong>Rating:</strong> {product.rating}</p>

                        <button
                            className="btn btn-primary w-100 my-3"
                            onClick={() => dispatch(addcart(product))}
                        >
                            Add to Cart
                        </button>

                        {product.warrantyInformation && (
                            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                        )}
                        {product.returnPolicy && (
                            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
                        )}

                        {/* Reviews */}
                        {product.reviews?.[0] && (
                            <div className="mt-4 border-top pt-3">
                                <h5>Top Review</h5>
                                <p><strong>Rating:</strong> {product.reviews[0].rating}</p>
                                <p><strong>Comment:</strong> {product.reviews[0].comment}</p>
                                <p><strong>Date:</strong> {product.reviews[0].date}</p>
                                <p><strong>Name:</strong> {product.reviews[0].reviewerName}</p>
                                <p><strong>Email:</strong> {product.reviews[0].reviewerEmail}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
