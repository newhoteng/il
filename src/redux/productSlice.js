import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API url
const APIBaseUrl = 'https://api-test.innoloft.com';

const initialState = {
  productData: {},
  isLoading: true,
  isError: undefined,
};

// Fetch app configuration data ${APIBaseUrl}
export const fetchProductData = createAsyncThunk(
  'productData/fetchProductData',
  async () => {
    try {
      const response = await axios.get(`${APIBaseUrl}/product/6781/`);
      // console.log(response);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const productSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.productData = action.payload;
      })
      .addCase(fetchProductData.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
