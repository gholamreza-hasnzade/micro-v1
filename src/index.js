import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import './components/config/app-configurations/i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


