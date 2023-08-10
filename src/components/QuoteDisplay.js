import React, { useState, useEffect } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': '/nQzRZm9zSQ6JljuZaEClA==W34WhJzVOhNn1DP8',
          },
        });
        const data = await response.json();

        if (data && data.length > 0) {
          setQuote(data[0]);
        } else {
          setError('No quotes available, check back later.');
        }
      } catch (err) {
        setError('An error occurred while fetching quotes.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (!quote) {
    return null;
  }

  return (
    <div>
      <p>
        &ldquo;
        {quote.quote}
        &rdquo;
      </p>
      <p>
        -
        {quote.author}
      </p>
    </div>
  );
};

export default QuoteDisplay;
