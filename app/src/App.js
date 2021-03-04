import './App.css';
import React from 'react'
import Wallet from './components/Wallet'
import GlobalStyle from './theme/GlobalStyle'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers/index'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


function App() {

  return (
    <>
      <GlobalStyle/>
      <Provider store={store}>
          <Wallet/>
     </Provider>
    </>
  );
}

export default App;