
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Css_Files/login.css'
import AddTask from './AddTask';
let redirectionurl = "JsonShower";




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        TodoList.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
let stat = {};
const theme = createTheme();

export default function SignIn() {


  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    stat = {
      email: data.get('email'),
      password: data.get('password')
    }

    if (stat.email == "" || stat.password == "") {
      alert("Values Can't be empty error occured");
      redirectionurl = "Pagenotfound"
      window.location.replace(`http://localhost:3000/${redirectionurl}`);
    }
    else {
      redirectionurl = "AddTask"
      localStorage.setItem('keyword', stat.email + "*" + stat.password);
      localStorage.setItem('username', stat.email);
      window.location.replace(`http://localhost:3000/${redirectionurl}`);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
       
          <CssBaseline />
        
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                 <Typography component="h1" variant="h5">
              To Do List Application
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth

                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Copyright text="amit" sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}