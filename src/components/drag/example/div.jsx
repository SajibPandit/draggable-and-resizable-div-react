import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Div = ({ id, position, setPosition, containerDimensions }) => {
  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    const { width: containerWidth, height: containerHeight } = containerDimensions;
    const divWidth = 100; // Adjust according to your draggable div width
    const divHeight = 50; // Adjust according to your draggable div height

    // Calculate maximum allowable positions to prevent div from going out of bounds
    const maxX = containerWidth - divWidth;
    const maxY = containerHeight - divHeight;

    // Ensure div stays within the container bounds
    const newPosition = {
      x: Math.min(Math.max(0, x), maxX),
      y: Math.min(Math.max(0, y), maxY)
    };

    setPosition({ id, position: newPosition });
  };

  return (
    <Draggable position={position} onDrag={handleDrag}>
      <div className="draggable-div">Draggable Div {id}</div>
    </Draggable>
  );
};

export default Div;
