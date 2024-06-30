import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField, Typography } from '@mui/material';
import './Login.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { useNavigate } from 'react-router-dom';
import userInstance from '../../axios_interceptors/user_axios';
import toast from 'react-hot-toast';

const Login = ({ open, handleClose, onRegisterClick }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToken = (token, userDetails) => {
    const { name, userId, email } = userDetails;
    console.log(userDetails)

    localStorage.setItem('userToken', token);
    localStorage.setItem('name', name);
    localStorage.setItem('userId', userId);
    localStorage.setItem('email', email);

    setTimeout(() => {
      localStorage.removeItem('userToken');
      localStorage.removeItem('name');
      localStorage.removeItem('userId');
      localStorage.removeItem('email');
      toast.warning("Session expired. Please log in again.");
    }, 86400000);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await userInstance.post('/login',formData);
      const { token, user } = response.data;
      handleToken(token, user);
      toast.success('login successfull');
      navigate('/');

      console.log(":data:",data)
    } catch (error) {
      console.error('Login Error:', error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <h2 className="login-header">Login Page</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
            />
            {errorMessage && (
              <Typography color="error" className="error-message">
                {errorMessage}
              </Typography>
            )}
            <p className="register-link">
              Don't have an account?{' '}
              <span onClick={onRegisterClick}>Register now</span>
            </p>
            <Button
              variant="contained"
              color="success"
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <ClipLoader size={20} color={'#fff'} />
              ) : (
                'Login'
              )}
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Login;