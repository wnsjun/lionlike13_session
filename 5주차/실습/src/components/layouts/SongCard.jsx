import React from 'react';

const Song = ({ song, onImageClick }) => {
  return (
    <section
      className="cursor-pointer bg-cyan-400 hover:bg-pink-300 p-6 rounded-xl hover:shadow-2xl
      inline-block w-full"

      onClick={() => onImageClick(song.albumImage)}
    >
      <div className="flex justify-center items-center">
      <img
        src={song.albumImage}
        alt={`${song.title} 앨범 커버`}
        className="object-cover rounded mb-4
            w-full"
      />

      </div>

      <h2 className="text-2xl font-semibold">{song.title}</h2>
      <hr className="my-4" />
      <p className="text-white-200">🎤 가수: {song.artist}</p>
      <p className="text-white-200">📝 작사가: {song.lyricist}</p>
      <p className="text-white-200">🎼 작곡가: {song.composer}</p>
      <p className="text-green-900 text-sm mt-2">📅 발매일: {song.releaseDate}</p>
    </section>
  );
};

export default Song;
