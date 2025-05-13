import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex gap-2">
        <input
          type="text"
          className="p-2 border rounded w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search TV Shows"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded border-2 border-black hover:bg-blue-600"
          onClick={handleSearch}
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
