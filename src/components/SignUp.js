import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}, Name: ${name}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          bgcolor: 'background.paper',
          boxShadow: 1,
          minWidth: 300,
          maxWidth: 500,
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        <TextField
          label="Id"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="success" type="submit" sx={{ mb: 2 }}>
          회원가입
        </Button>
      </Box>
    </Box>
  );
};

export default SignupForm;
