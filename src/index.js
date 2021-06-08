import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Klinik24Jam from './pages/Klinik24Jam';
// import TambahDataDokter from './pages/TambahDataDokter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Klinik24Jam />
    {/* <TambahDataDokter/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
