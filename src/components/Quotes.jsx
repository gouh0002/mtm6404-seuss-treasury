import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => response.json())
      .then(data => setQuotes(data));
  }, []);

  return (
    <div className="quotes">
      <h1>Random Dr. Seuss Quotes</h1>
      <div className="quotes-list">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-source">- {quote.book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes; 