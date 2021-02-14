import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import {ProductList} from './styles';
import {formatPrice} from '../../utils/formated'



import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions'

import axios from 'axios'


function Home({addToCartRequest,amount}) {

  const [stateHome, setStateHome] = useState({
    products:[]
  })
 
  useEffect(()=>{
    const getData = async() => {
      const response = await axios.get('http://localhost:3333/products')
      const data = response.data.map(product=> ({
        ...product,
        priceFomarted:formatPrice(product.price)
      }))
      setStateHome({
        products:data
      })
    }
    getData()
  },[])

  const handleAddProduct = id => {
    addToCartRequest(id)
  }

  return (
      <ProductList>
        {stateHome.products.map(product => (
          <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFomarted}</span>

              <button type='button' onClick={()=>handleAddProduct(product.id)} >
                <div>
                    <MdAddShoppingCart size={16} color='#fff' /> {' '}
                    {amount[product.id] || 0}
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
          </li>
        ))}
         
      </ProductList>
  );
}

const mapStateToProps = state => ({
    amount:state.cart.reduce((amount,product) => {
       amount[product.id] = product.amount 
       return amount
    },{})
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(CartActions,dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Home);