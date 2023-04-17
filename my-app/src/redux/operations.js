import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63979fa677359127a03c5193.mockapi.io";

const url = new URL("https://63979fa677359127a03c5193.mockapi.io/users");
url.searchParams.append("page", 1);
url.searchParams.append("limit", 8);

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUsersByPage = createAsyncThunk(
  "users/fetchByPage",
  async (page, thunkAPI) => {
    try {
      const urlWithPage = new URL(
        "https://63979fa677359127a03c5193.mockapi.io/users"
      );
      urlWithPage.searchParams.append("page", page);
      urlWithPage.searchParams.append("limit", 8);
      const response = await axios.get(urlWithPage);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleFollowing = createAsyncThunk(
  "users/toggleFollowing",
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        following: !user.following,
        followers: !user.following ? user.followers + 1 : user.followers - 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
