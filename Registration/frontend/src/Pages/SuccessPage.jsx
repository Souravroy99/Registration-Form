import React from 'react';

function SuccessPage() {
  return (
    <div className="success-container">
      <div className="success-content">
        <h1>Success!</h1>
        <p>Your action was completed successfully.</p>
        <button className="home-button" onClick={() => window.location.href = '/'}>Go to Home</button>
      </div>
    </div>
  );
}

export default SuccessPage;
