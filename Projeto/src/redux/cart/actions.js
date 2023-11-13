import CartActionTypes from "./actions-type";

export const addProductToCart = payload => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = payload => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
});