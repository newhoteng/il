import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'or3f9VGJdztMdPwsexmB';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
  defaultValues: [
    { category: 'Action', percentage: 64, chapter: 'Chapter 17' },
    { category: 'Science Fiction', percentage: 8, chapter: 'Chapter 3: "A Lesson Learned"' },
    { category: 'Economy', percentage: 0, chapter: 'Introduction' },
  ],
};

export const getBookItems = createAsyncThunk('books/getBookItems', async (name, thunkAPI) => {
  try {
    const resp = await axios(`${baseUrl}/apps/${appId}/books`);
    const { data } = resp;
    const arrayOfBooks = [];
    Object.entries(data).forEach((entry) => {
      const bookObj = {
        item_id: entry[0],
        title: entry[1][0].title,
        author: entry[1][0].author,
        category: entry[1][0].category,
      };
      arrayOfBooks.push(bookObj);
    });
    return arrayOfBooks;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const postBook = createAsyncThunk('books/postBook', async (newBook, thunkAPI) => {
  try {
    const resp = await axios.post(`${baseUrl}/apps/${appId}/books`, newBook);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${baseUrl}/apps/${appId}/books/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      const remainingBooks = state.books.filter((book) => book.item_id !== itemId);
      state.books.splice(0, state.books.length, ...remainingBooks);
    },
  },
  extraReducers: (builder) => {
    // getbookItems
    builder.addCase(getBookItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBookItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBookItems.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    // postbook
    builder.addCase(postBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(postBook.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    // deletebook
    builder.addCase(deleteBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
