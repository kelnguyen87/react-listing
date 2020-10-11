import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import * as actions from '../../actions';
import {fetchProducts} from './../../lib/fetchProducts';
import ProductList from "../containers/ProductList";

const Collections = (props) => {

  useEffect(() => {
    _getFetchProducts(collectionId);
  }, []);

  const { match: { params: { collectionId } } } = props; // this.props.match.params.collectionId
  const [productList,setProductList]= useState([]);

  const _getFetchProducts=(collectionId)=>{
    const getFetchProducts = fetchProducts();
    return getFetchProducts.then(items=>{
      const catProduct = items.filter(product => product.Category === collectionId)
      setProductList(catProduct);
    })
  }


  return(
      <ProductList products={productList} pageName={collectionId}/>
  );
}


export default Collections;
