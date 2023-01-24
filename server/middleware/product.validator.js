import Product from '../models/product.model.js';

const validateProduct = (req, res, next) => {
	const product = new Product(req.body);
	if (Object.values(product).some(x => x === undefined)) {
		return res.json({ message: 'some fields were not provided' });
	}
	next();
};

export default { validateProduct };
