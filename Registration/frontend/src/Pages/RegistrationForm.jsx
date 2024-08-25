import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = async(e) => {
    const name = e.target.name ;
    const value = e.target.value ;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.userName) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return ;
    } 

    try {
      const response = await fetch(`http://localhost:3001/registration/form`, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(form),
      })

      const data = response.json() ;

      if(response.ok) {
        navigate('/success');
        console.log(`Registration Done!`);
        setErrors({});
      }
      else {
        navigate('/emailExists');
        console.log(`Email already exists!`);
      }
    }
    catch(error) {
      navigate('/error');
      console.error("Register Error: ", error);
    }
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor='userName'>Name</label>
          <input 
            type="text" 
            name="userName"
            value={form.userName} 
            onChange={(e) => handleInput(e)} 
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor='email'>Email</label>
          <input 
            type="email" 
            name="email"
            value={form.email} 
            onChange={(e) => handleInput(e)} 
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor='password'>Password</label>
          <input 
            type="password" 
            name="password"
            value={form.password} 
            onChange={(e) => handleInput(e)} 
            placeholder="Enter your password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
