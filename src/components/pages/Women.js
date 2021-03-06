import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import * as actions from '../../actions';
import {fetchProducts} from './../../lib/fetchProducts';
import ProductList from "../containers/ProductList";

const Women = (props) => {

  useEffect(() => {
    _getFetchProducts();
  }, []);

  const [productList,setProductList]= useState([]);
  const _getFetchProducts=()=>{
    const getFetchProducts = fetchProducts();
    return getFetchProducts.then(items=>{
      const catProduct = items.filter(product => product.Category === 'women')
      setProductList(catProduct);
    })
  }


  return(
      <ProductList products={productList} pageName={"Women"}/>
  );
}


export default Women;
