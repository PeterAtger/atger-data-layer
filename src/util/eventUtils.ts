import { BaseEventType } from "../types/Events"

export const initDataLayer = () => {
    window.dataLayer = window.dataLayer || [];
}

export const pushEvent = (event: BaseEventType) => {
    window.dataLayer.push(event);
}