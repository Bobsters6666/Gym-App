import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Calculator from './Calculator.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Calculator />
  </React.StrictMode>,
)
