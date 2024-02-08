'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const Home = () => {
  const [query, setQuery] = useState(''); // State to store the input value
  const router = useRouter(); // Access the router object

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Redirect to the desired URL with the query parameter
    router.push(`/test?q=${query}`);
  };

  const handleInputChange = (e:any) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h1>Search Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter search query"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Home;
