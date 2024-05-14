import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import loginAsset from "../assets/login-asset.svg";
import welcomeAsset from "../assets/welcome-asset.svg";
import { Snackbar } from "@mui/material";
import axios from "axios";
import constants from "../utils/constants";
import ProgressBar from "../utils/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { storeLoggedInUser, storeUserToken } from "../redux/userSlice";
import { addLoggedInUser, addUserToken, getLoggedInUser, getUserToken } from "../utils/localStorage";
import { useNavigate, Navigate } from "react-router-dom";

export const validateFields = (email, password) => {
  if (
    email.trim().length < 1 || // eslint-disable-next-line
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  ) {
    return "email";
  }
  if (password.trim().length < 3) {
    return "password";
  }
  return false;
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (validateFields(data.get("email"), data.get("password")) === "email") {
      handleSnackBarOpen("Please enter valid email address");
      return false;
    } else if (
      validateFields(data.get("email"), data.get("password")) === "password"
    ) {
      handleSnackBarOpen("Please enter password of atleast 3 characters");
      return false;
    }
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const apiData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    showProgressBar("Please be patient! While user is being authorised");

    setTimeout(()=>{
      hideProgressBar();
      handleSnackBarOpen('LoggedIn Successfully!');
      navigate("/dashboard");
    },1500);
  };
  return (
    <Box>
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
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginAsset})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "60%",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "#CAF0F8",
                width: 80,
                height: 80,
                padding: 1.5,
              }}
              src={welcomeAsset}
            />

            <Typography component="h1" variant="h5" color={"#023E8A"}>
              Welcome to Social Book
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "#023E8A",
                  },
                }}
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
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "#023E8A",
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, color: "#023E8A", borderColor: "#023E8A" }}
              >
                Log In
              </Button>
              <Link href="/register" variant="body2" color={"#023E8A"}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
