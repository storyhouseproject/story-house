import Router from 'express';
import pv from '../middleware/product.validator.js';

const productRouter = Router();

productRouter.route('/create/product').post(pv.validateProduct, (req, res) => {
	console.log(req.body);
	res.json({ message: 'product added' });
});

export default productRouter;
