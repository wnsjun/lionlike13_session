import albumData from '../data/song.json';
import { Modal } from '../components/layouts/Modal';
import { useState } from 'react';
import Song from '../components/layouts/SongCard';

export const Playlist = () => {
  const [initImage, setImage] = useState();

  return (
    <main className="p-4 grid gap-4 grid-cols-4 ">
      {albumData.map((song, id) => (
        <Song key={id} song={song} onImageClick={setImage} />
      ))}
      {initImage && (
        <Modal imageUrl={initImage} onClose={() => setImage()} />
      )}
    </main>
  );
};

export default Playlist;
