const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { name, stock, description, cost_price, selling_price } = req.body;

    if (!name || !stock || !description || !cost_price || !selling_price) {
        res.status(400).json({ success: false, message: "Content cannot be empty" });
        return;
    }

    try {
        const product = await Product.create({
            name, stock, description, cost_price, selling_price
        });

        res.status(200).json({ success: true, message: "Product created successfully." });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getOne = async (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            res.status(200).json({ success: true, product });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
}

exports.findAllProduct = async (req, res) => {
    Product.find()
        .then(product => {
            res.status(200).json({ success: true, product });
        }).catch(err => {
            res.status(500).json({ success: false, message: err.message });
        });
};

exports.updateProduct = async (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            const { name, stock, description, cost_price, selling_price } = req.body;
            product.name = name;
            product.stock = stock;
            product.description = description;
            product.cost_price = cost_price;
            product.selling_price = selling_price;

            product.save()
                .then(() => res.status(200).json({ success: true, message: 'Product updated successfully' }))
                .catch(err => res.status(500).json({ success: false, message: err.message }));
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
};

exports.deleteProduct = async (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ success: true, message: 'Product deleted successfully.' }))
        .catch(err => res.status(400).json({ success: false, message: err.message }));
};