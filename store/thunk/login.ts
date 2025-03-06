import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosNoUser, axiosUser } from "@/core/axios";

export const loginThunk = createAsyncThunk(
  "login",
  async (
    action: { username: string; password: string },
    { rejectWithValue }
  ) => {
    // request to model node from component nodeList
    const user = await axiosNoUser.post("user/login/", action);
    console.log(user.status);

    axiosUser.defaults.headers.Authorization = `Bearer ${user.data.access}`;

    // check for accepted request
    if (user.status !== 200) return rejectWithValue("");

    console.log(user.data);

    //create response for requests
    const response = {
      user: user.data,
    };
    return response;
  }
);
