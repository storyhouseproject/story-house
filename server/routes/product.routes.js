import Router from 'express';
import Book from '../models/book.model.js';
import Product from '../models/product.model.js';

const validateProduct = (req, res, next) => {
	const product = new Product(req.body);
	if (Object.values(product).some(x => x === undefined)) {
		return res.json({
			message: 'some fields were not provided for the product'
		});
	}

	if (product.type == 'Book') {
		const book = new Book(req.body);
		if (Object.values(book).some(x => x === undefined)) {
			return res.json({
				message: 'some fields were not provided for the book'
			});
		}
	}

	next();
};

const productRouter = Router();

productRouter.route('/create/product').post(validateProduct, (req, res) => {
	console.log(req.body);
	res.json({ message: 'product added' });
});

export default productRouter;
