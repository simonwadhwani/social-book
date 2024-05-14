import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import constants from "../utils/constants";

const initialState = {
  allPosts: [],
  status: 'idle',
  error: null
};

export const fetchAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (userToken) => {
    try {
      const response = await axios.get(constants.BASE_URL + constants.GETPOST, {
        headers: { authorization: userToken },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (data) => {
    try {
      const response = 
      await axios.post(
        constants.BASE_URL + constants.POST,
        data.data,
        {
          headers: { authorization: data.token },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setAllPosts: (state, { payload }) => {
      state.allPosts = payload;
    },
  },
  extraReducers(builder){
    builder.addCase(fetchAllPosts.pending, (state, action)=>{
      state.status = 'loading'
    })
    .addCase(fetchAllPosts.fulfilled, (state, action)=>{
      state.status = 'succeeded'
      state.allPosts = action.payload.data;
    })
    .addCase(fetchAllPosts.rejected, (state, action)=>{
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(createPost.pending, (state, action)=>{
      console.log('createPost.pending');
      state.status = 'loading'
    })
    .addCase(createPost.fulfilled, (state, action)=>{
      console.log('createPost.fulfilled');
      state.status = 'succeeded'
      state.allPosts = [...state.allPosts, action.payload.data];
    })
    .addCase(createPost.rejected, (state, action)=>{
      state.status = 'failed'
      state.error = action.error.message
    })
  }
});

export const { setAllPosts } = postSlice.actions;

export default postSlice.reducer;
