import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails } from '../API/tvmaze';

const Detail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      const data = await getShowDetails(id);
      setShow(data);
    };
    fetchShow();
  }, [id]);

  if (!show) return <div className="text-center">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">{show.name}</h2>
      {show.image ? (
        <img src={show.image.medium} alt={show.name} className="mb-4" />
      ) : (
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
          <span>No Image Available</span>
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: show.summary }} className="text-gray-700"></div>
    </div>
  );
};

export default Detail;
