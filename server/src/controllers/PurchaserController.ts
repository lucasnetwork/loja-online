import { Request, Response } from 'express';

import mercadoPago from '~/services/mercadopago';

interface Items {
  items: Array<{
    id: number;
    title: string;
    quantity: number;
    currency_id: string;
    unit_price: number;
  }>;
  payer: { email: string };
  external_reference: number;
}

class PurchaserController {
  // eslint-disable-next-line class-methods-use-this
  async store(req: Request, res: Response) {
    const dados: Items = {
      items: [
        {
          id: 0,
          title: 'oioi',
          quantity: 1,
          currency_id: 'BRL',
          unit_price: 99.99,
        },
      ],
      payer: {
        email: 'lucas@gmail.com.br',
      },
      external_reference: 0,
    };
    try {
      const pagamento = await mercadoPago.preferences.create(dados);
      return res.redirect(pagamento.body.init_point);
    } catch (err) {
      return res.send(err);
    }
  }
}

export default PurchaserController;
