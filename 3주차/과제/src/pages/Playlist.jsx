import albumData from '../data/song.json';
import { Modal } from '../components/layouts/Modal';
import { useState } from 'react';

export const Playlist = () => {
  const [initImage, setImage] = useState();

  return (
    <main className="p-10 grid grid-cols-4 gap-6">
      {albumData.map((song, id) => (
        <section
          key={id}
          className="cursor-pointer bg-cyan-400 hover:bg-pink-300 p-6 rounded-xl hover:shadow-2xl"
        >
          <img
            src={song.albumImage}
            alt={`${song.title} 앨범 커버`}
            className="w-full h-60 object-cover rounded mb-4"
            onClick={() => setImage(song.albumImage)}
          />
          <h2 className="text-2xl font-semibold">{song.title}</h2>
          <hr className="my-4" />
          <p className="text-white-200">🎤 가수: {song.artist}</p>
          <p className="text-white-200">📝 작사가: {song.lyricist}</p>
          <p className="text-white-200">🎼 작곡가: {song.composer}</p>
          <p className="text-green-900 text-sm mt-2">
            📅 발매일: {song.releaseDate}
          </p>
        </section>
      ))}
      {initImage && (
        <Modal imageUrl={initImage} onClose={() => setImage()} />
      )}
    </main>
  );
};
