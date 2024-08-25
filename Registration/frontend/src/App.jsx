import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegistrationForm from './Pages/RegistrationForm';
import SuccessPage from './Pages/SuccessPage';
import ErrorPage from "./Pages/ErrorPage";
import EmailExists from './Pages/EmailExists';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className='header'>Registration Form</h1>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<RegistrationForm />}/>
          <Route path='/success' element={<SuccessPage />}/>
          <Route path='/error' element={<ErrorPage />}/>
          <Route path='/emailExists' element={<EmailExists />}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
