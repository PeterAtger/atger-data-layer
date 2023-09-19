import { EVENT_NAMES } from "../types/Events";
import { initDataLayer, pushEvent } from "../util/eventUtils";

export const fireGeneralEvent = () => {
    initDataLayer();
    const event = {
        event: EVENT_NAMES.GENERAL,
    };

    pushEvent(event);
}