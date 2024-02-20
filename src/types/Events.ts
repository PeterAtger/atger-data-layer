// Event Names
export const EVENT_NAMES = {
    VIEW_ITEM: 'view_item',
    VIEW_ITEM_LIST: 'view_item_list',
    ADD_TO_CART: 'add_to_cart',
    REMOVE_FROM_CART: 'remove_from_cart',
    BEGIN_CHECKOUT: 'begin_checkout',
    ADD_TO_WISHLIST: 'add_to_wishlist',
    ADD_SHIPPING_INFO: 'add_shipping_info',
    ADD_PAYMENT_INFO: 'add_payment_info',
    PURCHASE: 'purchase',
    GENERAL: 'general'
}

// Hook Parameters
export interface BaseEventParams {
    eventName: string,
}

export interface ProductEventParams extends BaseEventParams {
    currency: string,
    value: number,
    items: EventItemType[]
}

export interface ListEventParams extends BaseEventParams {
    item_list_id: string,
    item_list_name: string,
    items: EventItemType[]
}

export interface ShippingEventParams extends ProductEventParams {
    shipping_tier: string,
}

export interface PaymentEventParams extends ProductEventParams {
    payment_type: string,
}

export interface PurchaseEventParams extends ProductEventParams, ShippingEventParams {
    transaction_id: string,
    order_payment_method: string,
    tax: number,
    shipping: number,
    discount_amount?: string,
    customer_email?: string,
    customer_id?: string,
    customer_status?: string,
}

// Item Types
export type EventItemType = {
    item_id: string,
    item_name: string,
    item_type?: string,
    affiliation?: string,
    coupon?: string,
    currency?: string,
    discount?: number,
    index?: number,
    item_brand?: string,
    item_category?: string,
    item_category2?: string,
    item_category3?: string,
    item_category4?: string,
    item_category5?: string,
    item_list_id?: string,
    item_list_name?: string,
    model_number?: string,
    item_variant?: string,
    location_id?: string,
    price?: number,
    quantity?: number
}

// Ecommerce Types
interface BaseEcommerceType {
    items: EventItemType[]
}

interface ProductEcommerceType extends BaseEcommerceType {
    currency: string,
    value: number,
}

interface ListEcommerceType extends BaseEcommerceType {
    item_list_id: string,
    item_list_name: string
}

interface ShippingEcommerceType extends ProductEcommerceType {
    shipping_tier: string,
}

interface PaymentEcommerceType extends ProductEcommerceType {
    payment_type: string,
}

interface PurchaseEcommerceType extends ProductEcommerceType, ShippingEcommerceType {
    transaction_id: string,
    order_payment_method: string,
    tax: number,
    shipping: number,
    discount_amount?: string,
    customer_email?: string,
    customer_id?: string,
    customer_status?: string,
}


// Final Event Types

export interface BaseEventType {
    event: string
}

export interface EcommerceEventType extends BaseEventType {
    ecommerce: BaseEcommerceType
}

export interface ProductEventType extends EcommerceEventType {
    ecommerce: ProductEcommerceType
}

export interface ListEventType extends EcommerceEventType {
    ecommerce: ListEcommerceType
}

export interface ShippingEventType extends ProductEventType {
    ecommerce: ShippingEcommerceType

}

export interface PaymentEventType extends ProductEventType {
    ecommerce: PaymentEcommerceType
}

export interface PurchaseEventType extends ProductEventType, ShippingEventType {
    ecommerce: PurchaseEcommerceType
}