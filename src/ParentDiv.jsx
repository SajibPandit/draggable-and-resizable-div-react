import React, { useState } from 'react';
import DraggableDiv from './DraggableDiv';

const ParentDiv = () => {
  const [positions, setPositions] = useState([{ x: 0, y: 0 },{ x: 0, y: 0 },{ x: 0, y: 0 }]);

  const handleSetPosition = ({ id, position }) => {
    const newPositions = [...positions];
    newPositions[id] = position;
    setPositions(newPositions);
  };

  return (
    <div className="container">
      {positions.map((position, index) => (
        <DraggableDiv
          key={index}
          id={index}
          position={position || { x: 0, y: 0 }}
          setPosition={handleSetPosition}
        />
      ))}
    </div>
  );
};

export default ParentDiv;
