import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import App from './components/app';
import reducers from './reducers';
import Home from './components/home' ;
import ReduxPromise from 'redux-promise';
import postsNew from './components/addPost';
import postsShow from './components/postsShow';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);




ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
     {/* <App /> */}
     <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/posts/new" component={postsNew}/>
        <Route path="/posts/:id" component={postsShow}/>
      </div>
    </BrowserRouter> 




  </Provider>
  , document.querySelector('.container'));
