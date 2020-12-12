import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import Routing from "./Routing";
import {reducers} from "./redux/reducers";
import './index.css';


const store = createStore(reducers);

const Entry = () => {
    return <Routing/>
};


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Entry/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
