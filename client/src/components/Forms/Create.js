import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Create = () => {
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [cost_price, setCostPrice] = useState('');
    const [selling_price, setSellingPrice] = useState('');

    const handleSubmit = async () => {
        await axios.post('http://localhost:5000/api/products',
            { name, stock, description, cost_price, selling_price })
            .then(() => window.location = '/')
            .catch(err => console.log(err))
            .then(() => window.location = '/')
    }

    return (
        <>
            <h2 className="form-heading">Add Product</h2>
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
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </>
    )
}

export default Create