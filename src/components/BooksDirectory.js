import React, { useState, useEffect } from 'react';

import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import Book from './Book';
import NewBookForm from './NewBookForm';

const BooksDirectory = () => {
  const [books, setBooks] = useState(null);
  const userId = AuthService.getCurrentUserId();

  useEffect(() => {
    (async () => {
      try {
        const response = await UserService.getUserBookDirectory(userId);
        setBooks(response.data);
      } catch(error) {
        const _books =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setBooks(_books);
      }
    })();
  }, []);

  if(!books) return <p>loading...</p>
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>All my books</h3>
      </header>
      <main>
        <NewBookForm />
        <div className="row">
          {books.map((book, i) => <Book key={i} {...book} />)}
        </div>
      </main>
    </div>
  );
};

export default BooksDirectory;
