/* 
    Intersection types
*/

interface Order {
    id: string;
    amount: number;
    currency: string;
};

interface Stripe {
    card: string;
    cvc: string;
};

interface Paypal {
    email: string;
};

// Joining one type with another
type CheckoutCard = Order & Stripe; 
type CheckoutPaypal = Order & Paypal;

const order: Order = {
    id: '42', 
    amount: 12,
    currency: 'EUR',
};

const orderCard: CheckoutCard = {
    ...order,
    card: '4220 0051 0909 3151',
    cvc: '423',
};

const orderPaypal: CheckoutPaypal = {
    ...order, 
    email: 'iran@gmail.com',
};

// Type Order & Stripe
const assigned = Object.assign({}, order, orderCard);