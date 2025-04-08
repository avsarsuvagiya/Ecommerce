import React, { useContext, useEffect, useState } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import { addcart } from '../Slice/cart';
import { useDispatch } from 'react-redux';



const Home = () => {
    const [category, setcategory] = useState([])
    const [beauty, setbeauty] = useState([])
    const [catlog, setcatlog] = useState("beauty")
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch()


    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(response => response.json())
            .then(json => setcategory(json))
    })

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${catlog}`)
            .then(response => response.json())
            .then(json => setbeauty(json.products))
    })

    const searchproducts = beauty.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));


    return (
        <div className="">
            <Header />

            <div className="container-fluid main_content mt-4">
                <div className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <h3 className="text-capitalize">{catlog}</h3>
                    <input
                        type="text"
                        className="form-control w-100 w-md-50"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="row">
                    {/* Category Sidebar */}
                    <div className="col-lg-3 slidebar mb-3 ">
                        <div className="bg-light p-3 rounded shadow-sm">
                            <h5 className="text-center">Category</h5>
                            <ul className="list-group">
                                {category.map((item, i) => (
                                    <li key={i} className="list-group-item list-group-item-action text-capitalize"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setcatlog(item)}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Product Area */}
                    <div className="col-lg-9   beauty_pro">

                        <div className="row cate">
                            {searchproducts.map((item, i) => (
                                <div className="col-lg-4 col-sm-6 col-12 mb-4" key={i}>
                                    <div className="card h-100 shadow-sm ">
                                        <img
                                            src={item.images?.[0]}
                                            className="card-img-top"
                                            alt={item.title}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="text-muted">Rs. {item.price}</p>
                                            <div className="mt-auto">
                                                <Link to={`/pro/${item.id}`} className="btn btn-primary w-100 mb-2">
                                                    View Details
                                                </Link>
                                                <button
                                                    className="btn btn-success w-100"
                                                    onClick={() => dispatch(addcart(item))}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {searchproducts.length === 0 && (
                                <div className="col-12 text-center">
                                    <p>No products found.</p>
                                </div>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home


