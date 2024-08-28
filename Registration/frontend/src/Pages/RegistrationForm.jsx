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

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // const url = `http://localhost:8001` ;
  const url = `https://registration-form-tcr7.onrender.com` ;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.userName) newErrors.userName = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(`${url}/registration/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // const data = await response.json() ;

      if (response.ok) {
        navigate('/success');
        console.log('Registration Done!');
        setErrors({});
      } else {
        navigate('/emailExists');
        console.log('Email already exists!');
      }
    } catch (error) {
      navigate('/error');
      console.error('Register Error: ', error);
    }
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="userName">Name</label>
          <input 
            type="text" 
            name="userName"
            value={form.userName} 
            onChange={handleInput} 
            placeholder="Enter your name"
          />
          {errors.userName && <span className="error">{errors.userName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email"
            value={form.email} 
            onChange={handleInput} 
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password"
            value={form.password} 
            onChange={handleInput} 
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
