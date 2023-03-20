/*eslint-disable*/
// import React, { useState } from 'react';
// import { TextField, Button, Typography, Box } from '@mui/material';

// const SignupForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Username: ${username}, Password: ${password}, Name: ${name}`);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//       }}
//     >
//       <Box
//         component="form"
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           p: 2,
//           bgcolor: 'background.paper',
//           boxShadow: 1,
//           minWidth: 300,
//           maxWidth: 500,
//         }}
//         onSubmit={handleSubmit}
//       >
//         <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
//           Sign Up
//         </Typography>
//         <TextField
//           label="Id"
//           variant="outlined"
//           value={username}
//           onChange={handleUsernameChange}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Name"
//           variant="outlined"
//           value={name}
//           onChange={handleNameChange}
//           sx={{ mb: 2 }}
//         />
//         <Button variant="contained" color="success" type="submit" sx={{ mb: 2 }}>
//           회원가입
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default SignupForm;
import { useState } from "react";
import { Typography, Paper, Box, TextField, Button } from "@mui/material";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [apikey, setApikey] = useState("");
  const [seckey, setSeckey] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원가입 처리 코드 작성
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhonenumChange = (event) => {
    setPhonenum(event.target.value);
  };

  const handleApikeyChange = (event) => {
    setApikey(event.target.value);
  };

  const handleSeckeyChange = (event) => {
    setSeckey(event.target.value);
  };

  return (
    <Paper variant="outlined" sx={{width: '90%', maxWidth: '500px', margin: '0 auto', padding: '20px' ,mt:10 }}>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
    <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
      <TextField
        label="ID"
        variant="outlined"
        margin="normal"
        value={id}
        onChange={handleIdChange}
      />
      <TextField
        label="PW"
        variant="outlined"
        margin="normal"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <TextField
        label="CONFIRM PW"
        variant="outlined"
        margin="normal"
        type="password"
        value={passwordConfirm}
        onChange={handlePasswordConfirmChange}
      />
      <TextField
        label="NAME"
        variant="outlined"
        margin="normal"
        value={username}
        onChange={handleUsernameChange}
      />
      <TextField
        label="BIRTHDAY"
        variant="outlined"
        margin="normal"
        value={birthday}
        onChange={handleBirthdayChange}
      />
      <TextField
        label="EMAIL"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="PHONE NUMBER"
        variant="outlined"
        margin="normal"
        value={phonenum}
        onChange={handlePhonenumChange}
      />
      <TextField
        label="APIKEY"
        variant="outlined"
        margin="normal"
        value={apikey}
        onChange={handleApikeyChange}
      />
      <TextField
        label="SECKEY"
        variant="outlined"
        margin="normal"
        value={seckey}
        onChange={handleSeckeyChange}
      />
      <br/>
      <Button variant="contained" color="success" onClick={handleSubmit} sx={{ mb: 2 }}>
        Sign up
      </Button>
    </Box>
    </Paper>
  );
};

export default Signup;