import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './styles.css';

const Create = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [cost_price, setCostPrice] = useState('');
    const [selling_price, setSellingPrice] = useState('');

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            const { name, stock, description, cost_price, selling_price } = response.data.product;
            setName(name);
            setStock(stock);
            setDescription(description);
            setCostPrice(cost_price);
            setSellingPrice(selling_price);
        }
        getProduct();
    }, [id])

    const handleSubmit = async () => {
        await axios.post(`http://localhost:5000/api/products/${id}`,
            { name, stock, description, cost_price, selling_price })
            .then(() => window.location = '/')
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2 className="form-heading">Update Product</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label>Product Name :</label>
                    <input type="text"
                        value={name}
                        required={true}
                        onChange={e => setName(e.target.value)}
                    >
                    </input>
                    <label>Stock :</label>
                    <input type="number"
                        value={stock}
                        required={true}
                        onChange={e => setStock(e.target.value)}
                    >
                    </input>
                </div>
                <div className="form-group">
                    <label>Cost Price :</label>
                    <input type="number"
                        value={cost_price}
                        required={true}
                        onChange={e => setCostPrice(e.target.value)}
                    >
                    </input>
                    <label>Selling Price :</label>
                    <input type="number"
                        value={selling_price}
                        required={true}
                        onChange={e => setSellingPrice(e.target.value)}
                    >
                    </input>

                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        style={{ 'width': '100%' }}
                        rows="5"
                        type="text"
                        value={description}
                        required={true}
                        onChange={e => setDescription(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className="form-btn">
                    <button onClick={() => window.location = '/'}>Back</button>
                    <button type="submit">Update Product</button>
                </div>
            </form>
        </>
    )
}

export default Create