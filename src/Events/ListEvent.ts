import { ListEventParams, ListEventType } from "../types/Events"
import { initDataLayer, pushEvent } from "../util/eventUtils";

export const fireListEvent = ({ eventName, item_list_id, item_list_name, items }: ListEventParams) => {
    initDataLayer();
    const event: ListEventType = {
        event: eventName,
        item_list_id,
        item_list_name,
        ecommerce: {
            items
        }
    };

    pushEvent(event);
}