import { EVENT_NAMES, PaymentEventParams, PaymentEventType, PurchaseEventParams, PurchaseEventType, ShippingEventParams, ShippingEventType, } from "../types/Events"
import { initDataLayer, pushEvent } from "../util/eventUtils";

export const fireShippingEvent = ({ currency, value, items, shipping_tier }: ShippingEventParams) => {
    initDataLayer();
    const event: ShippingEventType = {
        event: EVENT_NAMES.ADD_SHIPPING_INFO,
        ecommerce: {
            currency,
            value,
            shipping_tier,
            items
        }
    };

    pushEvent(event);
}

export const firePaymentEvent = ({ currency, value, items, payment_type }: PaymentEventParams) => {
    initDataLayer();
    const event: PaymentEventType = {
        event: EVENT_NAMES.ADD_PAYMENT_INFO,
        ecommerce: {
            currency,
            value,
            payment_type,
            items
        }
    };

    pushEvent(event);
}

export const firePurchaseEvent = ({
    currency,
    value,
    items,
    transaction_id,
    order_payment_method,
    tax,
    shipping,
    shipping_tier,
    discount_amount,
    customer_email,
    customer_id,
    customer_status
}: PurchaseEventParams) => {
    initDataLayer();
    const event: PurchaseEventType = {
        event: EVENT_NAMES.PURCHASE,
        ecommerce: {
            currency,
            value,
            transaction_id,
            order_payment_method,
            tax,
            shipping,
            shipping_tier,
            items,
            ...(customer_email && { customer_email }),
            ...(customer_id && { customer_id }),
            ...(customer_status && { customer_status }),
            ...(discount_amount && { discount_amount }),
        },
    };

    pushEvent(event);
}