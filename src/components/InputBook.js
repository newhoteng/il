import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook, addBook } from '../redux/books/booksSlice';
import styles from '../styles/HomePage.module.css';

function InputBook() {
  const [payload, setPayload] = useState({
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { item_id: uuidv4(), ...payload };
    dispatch(addBook(newBook));
    dispatch(postBook(newBook));
    setPayload({
      ...payload,
      title: '',
      author: '',
    });
  };

  return (
    <div className={styles.formSection}>
      <p className={styles.title}>ADD NEW BOOK</p>
      <form className={styles.flexContainer} onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          required
          placeholder="Book title"
          value={payload.title}
          onChange={handleChange}
        />
        <input
          name="author"
          type="text"
          required
          placeholder="Author"
          value={payload.author}
          onChange={handleChange}
        />
        <button type="submit">ADD BOOK</button>
      </form>
      <span />
    </div>
  );
}

export default InputBook;
