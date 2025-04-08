import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link, useParams } from 'react-router-dom';
import { addcart } from '../Slice/cart';
import { useDispatch } from 'react-redux';
function ProductDetails() {
    const dispatch = useDispatch()

    const { productId } = useParams()
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(response => response.json())
            .then(json => setProduct(json))
    });

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="">
            <Header />
            <div className="container mt-5">
                <Link to="/" className="btn btn-secondary mb-3">← Back to </Link>
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.images} className="img-fluid" alt={product?.title || 'Product'} />
                        <div className="multiimg ">
                            <img src={product.images} className="img-fluid" alt={product?.title || 'Product'} />
                            <img src={product.images} className="img-fluid" alt={product?.title || 'Product'} />
                            <img src={product.images} className="img-fluid" alt={product?.title || 'Product'} />
                            <img src={product.images} className="img-fluid" alt={product?.title || 'Product'} />

                        </div>
                    </div>

                    <div className="col-md-6">
                        <h2>{product.title}</h2>
                        <p className="text-muted">{product.description}</p>
                        <h4 className="text-success">Rs. {product.price}</h4>
                        <h6><strong>Discount :</strong> {product.discountPercentage} % </h6>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Stock:</strong> {product.stock} available</p>
                        <p><strong>Ratting :</strong>  {product.rating}</p>
                        <p><strong>Warranty  :</strong>  {product.warrantyInformation}</p>
                        <p><strong>Return Policy  :</strong>  {product.returnPolicy}</p>

                        <button className="btn btn-primary w-100" onClick={() => dispatch(addcart(product))}>Add to Cart</button>
                        <div className="mt-5">
                            <p><strong>Ratting  :</strong>  {product.reviews[0].rating}</p>
                            <p><strong>Comment  :</strong>  {product.reviews[0].comment}</p>
                            <p><strong>Date  :</strong>  {product.reviews[0].date   }</p>
                            <p><strong>reviewerName  :</strong>  {product.reviews[0].reviewerName}</p>
                            <p><strong>reviewerEmail :</strong>  {product.reviews[0].reviewerEmail}</p>
                        </div>



                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProductDetails;


