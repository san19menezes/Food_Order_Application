import React, { useReducer } from 'react';
import CartContext from './cart-context';
const CART_STATE = {
    ADD: 'ADD',
    REMOVE: 'REMOVE'
}

const defaultCartState = {
    items: [],
    totalAmount: 0
}
//Reducer function : create outside the component
const cartReducer = (state, action) => {
    if (action.type === CART_STATE.ADD) {
        const updatedItems = state.items.concat(action.item);// concat does not mutate the original array but creates a new one in memory
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if (action.type === CART_STATE.REMOVE) {

    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: CART_STATE.ADD, item: item })
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: CART_STATE.REMOVE, id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;