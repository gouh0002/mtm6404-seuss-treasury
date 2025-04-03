import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <div className="error">Book not found</div>;

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <div className="book-content">
        <img 
          src={book.image || 'https://placehold.co/300x400?text=No+Image+Available'} 
          alt={book.title} 
          className="book-cover"
        />
        <div className="book-info">
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail; 