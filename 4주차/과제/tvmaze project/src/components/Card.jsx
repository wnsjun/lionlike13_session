import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ show }) => {
  return (
    <Link to={`/shows/${show.id}`} className="block bg-white p-4 rounded shadow hover:shadow-lg transition transform hover:-translate-y-1">
      {show.image ? (
        <img src={show.image.medium} alt={show.name} className="w-full rounded" />
      ) : (
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
          <span>No Image</span>
        </div>
      )}
      <h3 className="text-xl font-bold mt-2">{show.name}</h3>
      <p className="text-gray-600">
        {show.genres.map((genre) => `#${genre} `)}
      </p>
    </Link>
  );
};

export default Card;
