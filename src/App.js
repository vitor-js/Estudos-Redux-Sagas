import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import './config/ReactotronConfig'
import GlobalStyle from './styles/global'
import Header from './components/Header'
import Routes from './router'

import {Provider} from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
          <Header/>
          <Routes/>
          <GlobalStyle/>
          <ToastContainer autoClose={3000}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
