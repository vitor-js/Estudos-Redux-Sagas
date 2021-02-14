import {call,put, select,all, takeLatest} from 'redux-saga/effects'

import {addToCartSuccess, updateAmountSuccess} from './actions'
import axios from 'axios'
import {toast} from 'react-toastify'
import {formatPrice} from '../../../utils/formated'

function* addCart({id}) {
    console.log() 
    const producExist = yield select(state=> state.cart.find(p=>p.id ===id))
    
    const stock = yield axios.get(`http://localhost:3333/stock/${id}`)
    const stockAmount = stock.data.amount
    const currentAmount = producExist ? producExist.amount : 0

    const amount = currentAmount + 1

    if(amount > stockAmount) {
        toast.error('Produto fora do estoque')
        return
    }

    if(producExist) {
        yield put(updateAmountSuccess(id, amount))
    }else {
        const response = yield axios.get(`http://localhost:3333/products/${id}`)
        const data = {
            ...response.data,
            amount:1,
            priceFormatted:formatPrice(response.data.price)
        }
        yield put(addToCartSuccess(data))
    }
}

function* updateAmount({id, amount}){
    if(amount <= 0 ) {
        return
    }
  
        const stock = yield axios.get(`http://localhost:3333/stock/${id}`)
        const stockAmount = stock.data.amount

        if(amount > stockAmount) {
            toast.error('Produto fora do estoque')
            return
        }
        yield put(updateAmountSuccess(id, amount))
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
])