import React, { useState } from 'react';
import { Box, TextField, Button, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import userInstance from '../../axios_interceptors/user_axios';
import toast from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';

const Register = ({ open, handleClose, onLoginClick }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'phone' && !/^\d*$/.test(e.target.value)) {
      return;
    }
  
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const response = await userInstance.post('/register', formData);
      console.log(response);
      setFormData({ ...formData, email: response.data.email });
      setEmail(formData.email)
      setOtpSent(true);
      toast.success(response.data.message || "otp");
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await userInstance.post("/verify", { email, otp });
      console.log(response);
      if (response.data.status === "success") {
        toast.success('Registration success');
        handleClose();
        onLoginClick();
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error(error.response.data.message);
      setErrorMessage('OTP verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className="modal-box">
        {!otpSent ? (
          <>
            <h2 className="registration-header">Registration Page</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
              <TextField
                label="Name"
                type="text"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Phone"
                type="tel"
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 10 }}
                required
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                required
              />
              <p className="login-link">Already have an account? <span onClick={onLoginClick}>Login now</span></p>
              <Button type="submit" variant="contained" color="success" fullWidth>
                {loading ? <ClipLoader size={20} color={"#fff"} /> : "Register"}
              </Button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </>
        ) : (
          <>
            <h2 className="registration-header">Verify OTP</h2>
            <form className="registration-form" onSubmit={handleOtpSubmit}>
              <TextField
                label="OTP"
                type="text"
                variant="outlined"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                fullWidth
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                {loading ? <ClipLoader size={20} color={"#fff"} /> : "Verify OTP"}
              </Button>
              <Button variant="text" color="primary" fullWidth>
                Resend OTP
              </Button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default Register;
