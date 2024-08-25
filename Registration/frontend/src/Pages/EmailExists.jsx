import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmailExists() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Email Already Exists</h2>
      <p style={styles.message}>
        The email you provided is already associated with an account.
      </p>
      <button style={styles.button} onClick={() => navigate('/')}>
        Try Again
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#FF0000',
  },
  message: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
  },
};

export default EmailExists;