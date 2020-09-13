import { Request, Response } from 'express';

class PurchaserController {
  async store(req: Request, res: Response) {
    return res.json('eoi');
  }
}

export default PurchaserController;
