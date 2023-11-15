import CartActionTypes from "./actions-type"

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return {
                ...state, products: [...state.products, action.payload],
            }

        case CartActionTypes.REMOVE_PRODUCT:
            const updatedProducts = state.products.filter(product => product.id !== action.payload.id);
            return {
                ...state,
                products: updatedProducts,
            };


        default:
            return state
    }
}

export default cartReducer