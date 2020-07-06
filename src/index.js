import React from 'react';
import ReactDOM from 'react-dom';
import Index from './app';
import './style/index.scss';

ReactDOM.render(
  <div className="background">
    <Index/>
  </div>,
  document.getElementById('app')
);

module.hot.accept();
