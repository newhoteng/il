import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API url and id
const APIBaseUrl = 'https://api-test.innoloft.com';
//   "proxy":"https://api-test.innoloft.com",
const appId = process.env.REACT_APP_APP_ID || 1;

const initialState = {
  appConfData: {},
  isLoading: false,
  error: undefined,
};

// Fetch app configuration data ${APIBaseUrl}
export const fetchAppConf = createAsyncThunk(
  'appConfData/fetchAppConfiguration',
  async () => {
    try {
      const response = await axios.get(`${APIBaseUrl}/configuration/${appId}/`);
      // console.log(response);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const appConfigurationSlice = createSlice({
  name: 'appConfData',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchAppConf.pending, (state) => {
        state.isLoading = true;
        // state.isError = false;
      })
      .addCase(fetchAppConf.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appConfData = action.payload;
      })
      .addCase(fetchAppConf.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default appConfigurationSlice.reducer;
