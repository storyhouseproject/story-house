import Router from 'express';
import Book from '../models/book.model.js';
import Product from '../models/product.model.js';

const products = [];

const validateProduct = (req, res, next) => {
	const product = new Product(req.body);

	if (Object.values(product).some(x => x === undefined)) {
		return res.json({
			message: 'some fields were not provided for the product'
		});
	}

	let book;
	if (product.type == 'Book') {
		book = new Book(req.body);
		if (Object.values(book).some(x => x === undefined)) {
			return res.json({
				message: 'some fields were not provided for the book'
			});
		}
	}

	req.product = { ...product, ...book };
	next();
};

const productRouter = Router();

productRouter
	.route('/product')
	.get((req, res) => {
		const productsCopy = structuredClone(products);

		productsCopy.forEach(p => delete p.isDeleted);

		res.json(productsCopy);
	})
	.post(validateProduct, (req, res) => {
		products.push(req.product);
		res.json({ message: 'post product' });
	})
	.delete((req, res) => {
		products.map(p => (p.isDeleted = true));
		res.json({ message: 'delete products' });
	});

productRouter
	.route('/product/:id')
	.get((req, res) => {
		const product = products.find(p => p.id == req.params.id);
		res.json(product ? product : { message: 'product not found' });
	})
	.put(validateProduct, (req, res) => {
		const index = products.findIndex(p => p.id == req.params.id);

		if (index == -1) {
			return res.json({ message: 'product not found' });
		}

		products[index] = req.product;

		res.json({ message: `put product ${req.params.id}` });
	})
	.delete((req, res) => {
		const index = products.findIndex(
			p => p.id == req.params.id && p.isDeleted == false
		);

		if (index == -1) {
			return res.json({ message: 'product not found' });
		}

		products[index].isDeleted = true;

		res.json({ message: `delete product ${req.params.id}` });
	});

export default productRouter;
