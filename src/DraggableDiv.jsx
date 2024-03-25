import React, { useState } from 'react';
import Draggable from 'react-draggable';

const DraggableDiv = ({ id, position, setPosition }) => {
  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ id, position: { x, y } });
  };

  return (
    <Draggable
      position={position}
      onDrag={handleDrag}
    >
      <div className="draggable-div">Div {id}</div>

    </Draggable>
  );
};

export default DraggableDiv;