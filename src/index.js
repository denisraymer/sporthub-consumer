import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './assets/styles/main.scss';
import App from './containers/App';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
