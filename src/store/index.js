import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleWare from 'redux-saga'

import Reducer from './modules/rootReducer'
import rootSaga from './modules/rootSagas'

const sagaMiddleware = createSagaMiddleWare();

const enhancer = process.env.NODE_ENV === 'development'
? compose(console.tron.createEnhancer(),applyMiddleware(sagaMiddleware))
: applyMiddleware(sagaMiddleware)

const store = createStore(Reducer, enhancer)

sagaMiddleware.run(rootSaga)
export default store;