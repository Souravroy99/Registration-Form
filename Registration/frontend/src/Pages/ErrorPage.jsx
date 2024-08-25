import React from 'react';

function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Oops!</h1>
        <p>Something went wrong. We couldn't find the page you were looking for.</p>
        <button className="home-button-error" onClick={() => window.location.href = '/'}>Go to Home</button>
      </div>
    </div>
  );
}

export default ErrorPage;
