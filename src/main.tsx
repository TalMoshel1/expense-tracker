import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './Home'
                                  {/* @ts-ignore */}
import {store} from '../src/store/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <HashRouter>
      <Routes>
        <Route element={<Home></Home>}></Route>
        <Route path='/' element={<App></App>}></Route>
      </Routes>
        </HashRouter>
    </Provider>
    
)
