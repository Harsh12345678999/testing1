import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '../../actions/productAction';
import GetAllProduct from '../products/getAllProduct';


const Home = () => {
    const dispatch = useDispatch()
    const productState = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    const { loading, products, error } = productState
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error:{error}</p>
    }
    return (
        <>
            <GetAllProduct key={products.id} products={products} />
        </>
    )
}

export default Home
