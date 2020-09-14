/* eslint-disable no-unused-vars */
import mercadoPago from 'mercadopago';

interface MercadoPagoInterface {
  configure(config: { sandbox?: boolean; access_token: string }): void;
  preferences: {
    create(dates: {
      items: Array<{
        id: number;
        title?: string;
        quantity: number;
        currency_id: string;
        unit_price: number;
      }>;
      payer: {
        email: string;
      };
      external_reference: number;
    }): {
      body: {
        init_point: string;
      };
    };
  };
}

const MercadoPago: MercadoPagoInterface = mercadoPago;

MercadoPago.configure({
  sandbox: true,
  access_token: '',
});

export default MercadoPago;
