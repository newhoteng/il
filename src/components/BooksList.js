import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBookItems } from '../redux/books/booksSlice';
import styles from '../styles/HomePage.module.css';

function BooksList() {
  const { books, isLoading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <ul>
        <h1>Loading...</h1>
      </ul>
    );
  }
  if (error) {
    return (
      <ul>
        <h1>Something went wrong</h1>
      </ul>
    );
  }

  return (
    <ul className={`${styles.ul} ${styles.flexContainer}`}>
      {books.map((book) => (
        <BookItem
          key={book.item_id}
          itemId={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          index={books.indexOf(book)}
        />
      ))}
    </ul>
  );
}

export default BooksList;
