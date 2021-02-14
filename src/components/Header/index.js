import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg'
import {MdShoppingBasket} from 'react-icons/md'
import cart from '../../store/modules/cart/reducer';

function Header({cart}) {
  return (
    <Container>
      
      <Link to='/'>
        <img  src={logo} alt='Rocketshoes'/>
      </Link>
      
      <Cart to='/cart'>
        <div>
            <strong>Meu carrinho</strong>
            <span>{cart} itens</span>
        </div>
        <MdShoppingBasket size={36} color='#fff' />
      </Cart>


    </Container>
    );
}

export default connect(state => ({
  cart:state.cart.length
}))(Header);