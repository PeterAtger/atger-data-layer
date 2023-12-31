import { ProductEventParams, ProductEventType } from "../types/Events"
import { initDataLayer, pushEvent } from "../util/eventUtils";

export const fireProductEvent = ({ eventName, currency, value, items }: ProductEventParams) => {
    initDataLayer();
    const event: ProductEventType = {
        event: eventName,
        ecommerce: {
            currency,
            value,
            items
        }
    };

    pushEvent(event);
}