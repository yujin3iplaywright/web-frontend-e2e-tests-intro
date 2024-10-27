'use client';

import { useEffect, useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fetch_data');
        const result = await response.json();
        setData(result.message);
      } catch (err) {
        setError('Error fetching data');
      }
    };
    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Data from API</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
