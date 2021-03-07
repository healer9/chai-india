import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './styles.css';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('http://localhost:5000/api/products');
            const result = response.data.product;
            setProducts([...result]);
        }
        getProducts();
    }, [products])

    return (
        <>
            <div>
                <h2 className="product-heading">Our Products</h2>
                <div className="add-btn">
                    <Link to={'/add'}>
                        <button>+ Add Product</button>
                    </Link>
                </div>
            </div>
            <div className="product-container">
                {products.length === 0 ?
                    <h1>No Products 😔</h1> :
                    products.map((product) => {
                        return <div className="product-card"
                            key={product._id}>
                            <div><span className="product-label">Name :</span> {product.name}</div>
                            <div><span className="product-label">Stock :</span> {product.stock === 0 ? <span>Out Of Stock</span> : product.stock}</div>
                            <div><span className="product-label">Description :</span> {product.description}</div>
                            <div><span className="product-label">Cost Price :</span> {product.cost_price}</div>
                            <div><span className="product-label">Selling Price :</span> {product.selling_price}</div>
                            <div className="product-btn">
                                <Link to={`/update/${product._id}`}><button>Update</button></Link>
                                <button
                                    onClick={async () => await axios.delete(`http://localhost:5000/api/products/${product._id}`)}
                                >Delete</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Product
