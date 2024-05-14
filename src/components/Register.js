import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import registerAsset from "../assets/register-asset.svg";
import ProgressBar from "../utils/ProgressBar";
import { Snackbar } from "@mui/material";
import constants from "../utils/constants";
import axios from "axios";

export default function Register() {
  const [userData, setUserData] = useState(
    {
      firstName: "",
      lastName: "",
      userName: "",
      profileDescription:"",
      email: "",
      password: ""
    }
  )
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [progressBarMessage, setProgressBarMessage] =
    React.useState("Please wait!");
  const showProgressBar = (message) => {
    setIsVisible(true);
    setProgressBarMessage(message);
  };
  const hideProgressBar = () => {
    setIsVisible(false);
    setProgressBarMessage("");
  };
  const handleSnackBarClose = () => {
    setIsSnackBarOpen(false);
  };
  const handleSnackBarOpen = (message) => {
    setIsSnackBarOpen(true);
    setSnackBarMessage(message);
  };

  const handleOnChange = (event)=>{
    const data = {...userData};
    data[event.target.name] = event.target.value;
    setUserData(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.firstName.trim().length < 1) {
      handleSnackBarOpen("Please enter first name");
      return false;
    }
    if (userData.lastName.trim().length < 1) {
      handleSnackBarOpen("Please enter last name");
      return false;
    }
    if (userData.userName.trim().length < 3) {
      handleSnackBarOpen("Please enter user name of atleast 3 characters");
      return false;
    }
    if (
      userData.email.trim().length < 1 || // eslint-disable-next-line
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)
    ) {
      handleSnackBarOpen("Please enter valid email address");
      return false;
    }
    if (userData.password.trim().length < 3) {
      handleSnackBarOpen("Please enter password of atleast 3 characters");
      return false;
    }
    const apiData ={
      firstName: userData.firstName,
      lastName: userData.lastName,
      profileDescription: userData.profileDescription,
      userName: userData.userName,
      email: userData.email,
      password: userData.password,
    };
    showProgressBar("Please be patient! While user is being registered");

    setTimeout(()=>{
      hideProgressBar();
        handleSnackBarOpen('User registered successfully!');
        setUserData( {
          firstName: "",
          lastName: "",
          userName: "",
          profileDescription:"",
          email: "",
          password: ""
        })
    },1500);
  };

  return (
    <Container maxWidth="xs">
      <ProgressBar
        isVisible={isVisible}
        progressBarMessage={progressBarMessage}
      />
      <Box sx={{ width: 700 }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isSnackBarOpen}
          onClose={handleSnackBarClose}
          message={snackBarMessage}
          key={"topcenter"}
          autoHideDuration={6000}
        />
      </Box>
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={registerAsset} height={"140px"} alt="register asset"/>
        <Typography component="h1" variant="h5" color={"#023E8A"}>
          Register to Social Book
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "#023E8A",
                  },
                }}
                value={userData.firstName}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "#023E8A",
                  },
                }}
                value={userData.lastName}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="profileDescription"
                label="Profile Description"
                name="profileDescription"
                variant="standard"
                multiline
                sx={{
                  "& label.Mui-focused": {
                    color: "#023E8A",
                  },
                }}
                value={userData.profileDescription}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "#023E8A",
                  },
                }}
                value={userData.userName}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "#023E8A",
                  },
                }}
                value={userData.email}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "#023E8A",
                  },
                }}
                value={userData.password}
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2, color: "#023E8A", borderColor: "#023E8A" }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
