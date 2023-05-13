import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Calculator from './Calculator.jsx'
import App from './components/app.jsx'
import Signup from './components/Signup.jsx'
import Dashboard from './components/dashboard.jsx'
import Login from './components/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import './index.css'
import './form.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Calculator />}></Route> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)
