import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,

    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL
} from "../constants/productContant";

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.product
            }

        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

const initialState = {
    loading: false,
    error: null,
    productDetails: null,
};

export const productDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productDetails: action.payload,
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};