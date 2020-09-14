/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';

class ProductController {
  async index(req: Request, res: Response) {
    const products = [
      { id: 0, title: 'smartphone', price: 300, image: '' },
      { id: 1, title: 'fone de ouvido', price: 100, image: '' },
      { id: 1, title: 'senhor dos anéis', price: 300, image: '' },
    ];

    return res.json(products);
  }
}

export default ProductController;
