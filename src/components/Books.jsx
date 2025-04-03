import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="books">
      <h1>Dr. Seuss Books</h1>
      <div className="books-grid">
        {books.map(book => {
          console.log('Book data:', book);
          return (
            <Link to={`/books/${book.id}`} key={book.id} className="book-card">
              <img 
                src={book.image || 'https://placehold.co/200x250?text=No+Image+Available'} 
                alt={book.title}
              />
              <h3>{book.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Books; 