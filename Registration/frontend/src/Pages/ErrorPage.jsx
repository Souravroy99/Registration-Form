import React from 'react';
import {useNavigate} from "react-router-dom"

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Oops!</h1>
        <p>Something went wrong. We couldn't find the page you were looking for.</p>
        <button className="home-button-error" onClick={() => navigate('/')}>Go to Home</button>
      </div>
    </div>
  );
}

export default ErrorPage;
