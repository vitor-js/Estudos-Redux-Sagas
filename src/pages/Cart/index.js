import React from 'react';
import {MdDelete, MdAddCircleOutline, MdRemoveCircleOutline} from 'react-icons/md'
import { Container,ProducTable,Total } from './styles';

import {formatPrice} from '../../utils/formated'

import * as CartActions from '../../store/modules/cart/actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

function Cart({cart,total,removeFromCart, updateAmountRequest}) {
  
  const increment = async(product) => {
    updateAmountRequest(product.id, product.amount + 1)
  }

  const decrement = async(product) => {
    updateAmountRequest(product.id, product.amount - 1)
  }



  return (
    <Container>
        <ProducTable>
            <thead>
              <th/>
              <th>
                Produto
              </th>
              <th>
                Quantidade
              </th>
              <th>
                Subtotal
              </th>
              <th/>
            </thead>
            <tbody>
              {cart.map(product => (
                  <tr>
                    <td>
                      <img src={product.image}/>
                    </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type='button' onClick={()=>decrement(product)} >
                        <MdRemoveCircleOutline size={20} color='#7159c1'/>
                      </button>
                      <input type='number' readOnly value={product.amount}/>
                      <button type='button' onClick={()=>increment(product)} >
                        <MdAddCircleOutline size={20} color='#7159c1'/>
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button onClick={()=> removeFromCart(product.id)} >
                      <MdDelete size={20} color='#7159c1'/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        </ProducTable>
        <footer>
          <button type='button' >
              Finalizar pedido
          </button>
          <Total>
            <span>Total</span>
            <strong>{total}</strong>
          </Total>
        </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart:state.cart.map(product => ({...product,
    subtotal:formatPrice(product.price * product.amount)})),

  total:formatPrice(state.cart.reduce((total,product)=> {
    return total + product.price * product.amount
  },0))
})

const mapDispacthToProps = dispatch => (
  bindActionCreators(CartActions, dispatch)
)

export default connect(mapStateToProps,mapDispacthToProps)(Cart);