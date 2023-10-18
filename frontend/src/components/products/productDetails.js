import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import ProductD from './productD';

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  const { loading, error, productDetails } = useSelector((state) => state.productDetails);

  useEffect(() => {

  }, [productDetails]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <ProductD productDetails={productDetails} />
    </>
  );
};

export default ProductDetails;
