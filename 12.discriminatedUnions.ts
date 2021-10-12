/* 
    Discriminated unions
*/


interface Order {
    id: string;
    amount: number;
    currency: string;
};

interface Stripe {
    type: 'stripe';
    card: string;
    cvc: string;
};

interface Paypal {
    type: 'paypal';
    email: string;
};

type CheckoutCard = Order & Stripe; 
type CheckoutPaypal = Order & Paypal;

const order: Order = {
    id: '42', 
    amount: 12,
    currency: 'EUR',
};

const orderCard: CheckoutCard = {
    ...order,
    type: 'stripe',
    card: '4220 0051 0909 3151',
    cvc: '423',
};

const orderPaypal: CheckoutPaypal = {
    ...order, 
    type: 'paypal',
    email: 'iran@gmail.com',
};

type Payload = CheckoutCard | CheckoutPaypal

function checkout(payload: Payload) {
    if (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc)
    }

    if (payload.type === 'paypal') {
        console.log(payload.email)
    }
}