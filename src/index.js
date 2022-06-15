import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';
import Navbars from './routes/Navbars';
import Home from './routes/Home';
import Navigators from './routes/Navigators';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<main style={{padding:"1rem"}}>
              <p>Select an invoice</p>
            </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />}/>
          </Route> 
          
          <Route path="*" 
            element={<main style={{ padding:'1rem'}}>
              <p>There's nothing here!</p>
            </main>
            }/>
          
        </Route>
        <Route path="navbars" element={<Navbars />} />
        <Route path="home" element={<Home />} />
        <Route path="navigators" element={<Navigators />} />
      </Routes>     
    </BrowserRouter>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
