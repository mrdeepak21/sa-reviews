import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('reviews-app');
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}