import React,{Component} from 'react';
import {fetchProducts} from './../../lib/fetchProducts';
import ProductList from "./../containers/ProductList";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }

    componentDidMount() {
        this._getFetchProducts();
    }

    _getFetchProducts=()=>{
        const getFetchProducts = fetchProducts();
        return getFetchProducts.then(item=>{
            this.setState({
                productList: item
             })
        })
    }

    render() {
        const {productList} = this.state;
        return (
            <ProductList products={productList}/>
        );
    }

};
export default Home;
