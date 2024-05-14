import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  Avatar,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomToolbar from "../utils/CustomToolbar";
import { stringAvatar } from "../utils/helper";
import {
  DoneOutlined,
  EditOutlined,
  SendOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import ProgressBar from "../utils/ProgressBar";
import axios from "axios";
import constants from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllPosts, setAllPosts, createPost } from "../redux/postSlice";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const post = useSelector((state) => state.post);
  const [allAvailablePosts, setAllAvailablePosts] = useState([
      {
        "_id": "653f1010846634763478ff41",
        "content": "I am on social media!",
        "likes": [
          {
            "$oid": "653f09b30018ae61f7a47266"
          },
          {
            "$oid": "653ed414861fb32693294cf9"
          }
        ],
        "comment": [
          {
            "_id": "653f107e3e4a247d62fae564",
            "text": "Welcome to social!",
            "postedBy":{
              "_id": "653ed414861fb32693294cf9",
              "firstName": "Mike",
              "lastName": "Ross",
              "userName": "mikey_1",
              "profileDescription": "I have the best memory",
              "email": "mike.ross@mail.com",
              "createdAt": "2023-10-29T21:52:20.975Z",
              "updatedAt": "2023-10-29T21:52:20.976Z",
              "__v": 0
            },
            "createdAt": "2023-10-30T02:10:06.299Z",
            "updatedAt": "2023-10-30T02:10:06.299Z",
            "__v": 0
          },
        ],
        "isEdited": true,
        "postedBy":{
          "_id": "653ed414861fb32693294cf3",
          "firstName": "Harvey",
          "lastName": "Specter",
          "userName": "specter_1",
          "profileDescription": "I play the odds",
          "email": "harvey.specter@mail.com",
          "createdAt": "2023-10-29T21:52:20.975Z",
          "updatedAt": "2023-10-29T21:52:20.976Z",
          "__v": 0
        },
        "createdAt": {
          "$date": "2023-10-30T02:08:16.903Z"
        },
        "updatedAt": {
          "$date": "2023-10-31T08:11:37.345Z"
        },
        "__v": 0
      },
      {
        "_id": "653f1010846634763478ff42",
        "content": "Hello! Good Eve Everyone!",
        "likes": [
          {
            "$oid": "653f09b30018ae61f7a47266"
          },
          {
            "$oid": "653ed414861fb32693294cf9"
          }
        ],
        "comment": [
          {
            "_id": "653f107e3e4a247d62fae564",
            "text": "Good Evening!",
            "postedBy":{
              "_id": "653ed414861fb32693294cf9",
              "firstName": "Harvey",
              "lastName": "Specter",
              "userName": "specter_1",
              "profileDescription": "I play the odds",
              "email": "harvey.specter@mail.com",
              "createdAt": "2023-10-29T21:52:20.975Z",
              "updatedAt": "2023-10-29T21:52:20.976Z",
              "__v": 0
            },
            "createdAt": "2023-10-30T02:10:06.299Z",
            "updatedAt": "2023-10-30T02:10:06.299Z",
            "__v": 0
          },
        ],
        "isEdited": true,
        "postedBy":{
          "_id": "653ed414861fb32693294cf9",
          "firstName": "Mike",
          "lastName": "Ross",
          "userName": "mikey_1",
          "profileDescription": "I have the best memory",
          "email": "mike.ross@mail.com",
          "createdAt": "2023-10-29T21:52:20.975Z",
          "updatedAt": "2023-10-29T21:52:20.976Z",
          "__v": 0
        },
        "createdAt": {
          "$date": "2023-10-30T02:08:16.903Z"
        },
        "updatedAt": {
          "$date": "2023-10-31T08:11:37.345Z"
        },
        "__v": 0
      },
  ]);
  const [postContent, setPostContent] = useState("");
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

  const calltoggleLikePostAPI = async (post) => {};

  const callCreateCommentAPI = (post) => {
    console.log('callCreateCommentAPI')
    let tempPosts = [...allAvailablePosts];
    const selectedPostIndex = tempPosts.findIndex((p) => p._id === post._id);
    tempPosts[selectedPostIndex]['comment'].push({
      "_id": "653f107e3e4a247d62fae564",
      "text": post.tempComment,
      "postedBy":{
        "_id": "653ed414861fb32693294cf9",
        "firstName": "Harvey",
        "lastName": "Specter",
        "userName": "specter_1",
        "profileDescription": "I play the odds",
        "email": "harvey.specter@mail.com",
        "createdAt": "2023-10-29T21:52:20.975Z",
        "updatedAt": "2023-10-29T21:52:20.976Z",
        "__v": 0
      },
      "createdAt": "2023-10-30T02:10:06.299Z",
      "updatedAt": "2023-10-30T02:10:06.299Z",
      "__v": 0
    });
    post['tempComment'] = '';
    setAllAvailablePosts(tempPosts);
  };

  const callCreatePostAPI = () => {};

  const callPutPostAPI = async (post) => {};

  const callGetPostAPI = () => {};

  useEffect(() => {
    if (post.status == 'idle') {
      // dispatch(fetchAllPosts(user.token))
    }
  }, [post.status, dispatch]);

  useEffect(() => {
    // setAllAvailablePosts(post.allPosts);
  }, [post.allPosts]);

  useEffect(() => {
    if (post.status == 'loading') {
      showProgressBar("Please be patient! while fetching update");
    }else if (post.status == 'failed') {
      hideProgressBar();
      handleSnackBarOpen(post.error);
      if (post.error.includes('token')) {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } else {
      hideProgressBar();
      setPostContent("");
    }
  }, [post.status]);

  const onToggleDisableFlagForPost = async (post) => {
    if (post.disable) {
      await callPutPostAPI(post);
    }
    let tempPosts = [...allAvailablePosts];
    const selectedPostIndex = tempPosts.findIndex((p) => p._id === post._id);
    const selectedPost = {
      ...tempPosts[selectedPostIndex],
      disable: !tempPosts[selectedPostIndex].disable,
    };
    tempPosts[selectedPostIndex] = selectedPost;
    setAllAvailablePosts(tempPosts);
  };

  const onEditPostContentChange = (post, value) => {
    let tempPosts = [...allAvailablePosts];
    const selectedPostIndex = tempPosts.findIndex((p) => p._id === post._id);
    const selectedPost = {
      ...tempPosts[selectedPostIndex],
      content: value,
    };
    tempPosts[selectedPostIndex] = selectedPost;
    setAllAvailablePosts(tempPosts);
  };

  const onEditPostCommentChange = (post, value) => {
    let tempPosts = [...allAvailablePosts];
    const selectedPostIndex = tempPosts.findIndex((p) => p._id === post._id);
    const selectedPost = {
      ...tempPosts[selectedPostIndex],
      tempComment: value,
    };
    tempPosts[selectedPostIndex] = selectedPost;
    setAllAvailablePosts(tempPosts);
  };

  return (
    <Box>
      <CustomToolbar />
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
      <Box padding={3}>
        <Card raised>
          <CardContent>
            <Typography color="#023E8A" gutterBottom variant="h6">
              Post an update
            </Typography>
            <TextField
              variant="outlined"
              multiline
              fullWidth
              size="small"
              rows={4}
              placeholder="Write something..."
              value={postContent}
              onChange={(event) => {
                setPostContent(event.target.value);
              }}
            />
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "flex-end", mr: 1 }}
          >
            <Button
              size="medium"
              variant="contained"
              disabled={postContent.trim().length < 1}
              sx={{
                backgroundColor: "#0077B6",
                "&:hover": {
                  backgroundColor: "#0077B6",
                },
              }}
              onClick={callCreatePostAPI}
            >
              Post
            </Button>
          </CardActions>
        </Card>
        <Divider
          sx={{
            mt: 3,
            color: "CAF0F8",
            "& span.MuiDivider-wrapper.css-qywfm8-MuiDivider-wrapper": {
              color: "#0077B6",
            },
          }}
          flexItem
          textAlign="left"
        >
          Read what world is posting!
        </Divider>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          rowGap={1.5}
          mt={1.5}
        >
          {allAvailablePosts.length > 0 ? (
            allAvailablePosts.map((post) => (
              <Grid item xs={6} key={post._id}>
                <Card
                  sx={{
                    p: 1,
                  }}
                >
                  <Stack>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flex: 1,
                          alignItems: "center",
                          m: 0.5,
                        }}
                      >
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          width={"100%"}
                        >
                          <Stack direction={"row"} alignItems={"center"}>
                            <Avatar
                              {...stringAvatar(
                                `${post.postedBy.firstName} ${post.postedBy.lastName}`
                              )}
                            />
                            <Typography color="#023E8A" variant="body1" ml={1}>
                              {post.postedBy.firstName} {post.postedBy.lastName}
                            </Typography>
                          </Stack>
                          {user.loggedInUser?._id === post.postedBy._id ? (
                            <IconButton
                              onClick={() => {
                                onToggleDisableFlagForPost(post);
                              }}
                              sx={{
                                padding: "4px",
                              }}
                            >
                              {post.disable ? (
                                <DoneOutlined />
                              ) : (
                                <EditOutlined />
                              )}
                            </IconButton>
                          ) : (
                            <></>
                          )}
                        </Stack>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          flex: 3,
                          mt: 1,
                          mb: 2,
                          flexDirection: "column",
                        }}
                      >
                        {post.disable ? (
                          <TextField
                            variant="outlined"
                            multiline
                            fullWidth
                            size="small"
                            rows={4}
                            placeholder="Write something..."
                            value={post.content}
                            defaultValue={post.content}
                            onChange={(event) => {
                              onEditPostContentChange(post, event.target.value);
                            }}
                          />
                        ) : (
                          <Typography
                            color="#023E8A"
                            gutterBottom
                            variant="subtitle2"
                            ml={0.7}
                          >
                            {post.content}
                          </Typography>
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flex: 1,
                          p: 0.5,
                          flexDirection: "column",
                        }}
                      >
                        <Stack direction={"row"} alignItems={"center"}>
                          <ThumbUpOutlined
                            sx={{
                              color: post.likes.includes(user.loggedInUser._id)
                                ? "red"
                                : "grey",
                              ml: 1,
                            }}
                            onClick={() => {
                              calltoggleLikePostAPI(post);
                            }}
                          />
                          <Typography
                            color="#023E8A"
                            variant="subtitle2"
                            ml={1}
                          >
                            Liked by {post.likes.length}
                          </Typography>
                        </Stack>

                        <Divider sx={{ mt: 0.5, mb: 0.7 }} />

                        <OutlinedInput
                          id="outlined-basic"
                          variant="outlined"
                          multiline
                          fullWidth
                          maxRows={4}
                          size="small"
                          placeholder="Write a comment..."
                          value={post.tempComment}
                          onChange={(event) => {
                            onEditPostCommentChange(post, event.target.value);
                          }}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                edge="end"
                                onClick={() => {
                                  callCreateCommentAPI(post);
                                }}
                              >
                                <SendOutlined />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                        <Box mt={1}>
                          {post.comment.map((comment) => (
                            <Card
                              variant="outlined"
                              sx={{
                                padding: 0.7,
                                mt: 0.5,
                              }}
                            >
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                spacing={0.7}
                              >
                                <Typography
                                  color="#023E8A"
                                  variant="body2"
                                  ml={1}
                                  fontWeight={"bold"}
                                >
                                  {comment.postedBy.userName}
                                </Typography>
                                <Typography
                                  color="#0096C7"
                                  variant="body2"
                                  mt={0.5}
                                >
                                  {comment.text}
                                </Typography>
                              </Stack>
                            </Card>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography align="center" variant="h6" color="#0077B6">
                Nobody has posted yet! Comeback later :)
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
