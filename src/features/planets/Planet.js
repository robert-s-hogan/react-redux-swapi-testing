import { useState, useEffect } from 'react';

const Planet = ({ name, terrain }) => {
  const [terrainSplit, setTerrainSplit] = useState([]);

  useEffect(() => {
    setTerrainSplit(terrain.split(','));
  }, [terrain]);

  return (
    <div className={`${terrain} relative overflow-hidden`}>
      <h3 className="text-center right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {name}
      </h3>
      <p className="text-white text-center text-lg p-4">
        {terrainSplit.map((terrain, index) => (
          <span key={index} className="inline-block mr-2">
            {terrain}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Planet;
