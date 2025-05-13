import React, { useState } from 'react';
import { searchShows } from '../API/tvmaze';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

const Home = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const result = await searchShows(query);
    setShows(result);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center text-gray-600 mt-4">Loading...</p>
      ) : shows.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {shows.map((item) => (
            <Card key={item.show.id} show={item.show} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-4">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Home;
