import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API url and id
const APIBaseUrl = 'https://api-test.innoloft.com';
const appId = process.env.REACT_APP_APP_ID || 1;

const initialState = {
  appConfData: {},
  isLoading: true,
  isError: undefined,
};

// Fetch app configuration data
export const fetchAppConf = createAsyncThunk(
  'appConfData/fetchAppConfiguration',
  async () => {
    try {
      const response = await axios.get(`${APIBaseUrl}/configuration/${appId}/`);
      document.documentElement.style.setProperty('--color-primary', response.data.mainColor);
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
        state.isError = false;
      })
      .addCase(fetchAppConf.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.appConfData = action.payload;
      })
      .addCase(fetchAppConf.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default appConfigurationSlice.reducer;
