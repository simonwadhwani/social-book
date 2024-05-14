import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import toolbarAsset from "../assets/toolbar-asset.svg";
import { removeLoggedInUser, removeUserToken } from "./localStorage";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

export default function CustomToolbar() {
  const navigate = useNavigate();
  const user = {loggedInUser:{
    "_id": "653ed414861fb32693294cf3",
    "firstName": "Harvey",
    "lastName": "Specter",
    "userName": "specter_1",
    "profileDescription": "I play the odds",
    "email": "harvey.specter@mail.com",
    "createdAt": "2023-10-29T21:52:20.975Z",
    "updatedAt": "2023-10-29T21:52:20.976Z",
    "__v": 0
  }};
  const onLogout = () => {
    removeLoggedInUser();
    removeUserToken();
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#0077B6",
        }}
      >
        <Toolbar>
          <img
            src={toolbarAsset}
            alt="toolbarAsset"
            height={"37px"}
            style={{ marginRight: "6px" }}
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Social Book
          </Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {`Hi, ${user.loggedInUser?user.loggedInUser.userName:""}`}
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  color: "#fff",
                  borderColor: "#fff",
                  boxShadow: "1px 1px 1px #ADE8F4",
                },
              }}
              onClick={onLogout}
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
