import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

const DraggableResizableDiv = ({ id, initialPosition, initialSize }) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);

  const handleResize = (event, { size }) => {
    setSize(size);
  };

  const handleDrag = (event, ui) => {
    setPosition({
      x: ui.x,
      y: ui.y
    });
  };

  return (
    <Draggable handle=".handle" defaultPosition={position} bounds="parent">
      <Resizable
        className="box"
        width={size.width}
        height={size.height}
        onResize={handleResize}
        minConstraints={[100, 100]}
        maxConstraints={[400, 400]}
      >
        <div className="handle">Drag from here</div>
        <div>{`ID: ${id}`}</div>
      </Resizable>
    </Draggable>
  );
};

const App = () => {
  const [divs, setDivs] = useState([]);

  const addDiv = () => {
    const newDivs = [...divs];
    const id = divs.length + 1;
    newDivs.push({
      id: id,
      initialPosition: { x: 0, y: 0 },
      initialSize: { width: 200, height: 200 }
    });
    setDivs(newDivs);
  };

  return (
    <div className="container">
      <button onClick={addDiv}>Add Div</button>
      {divs.map(div => (
        <DraggableResizableDiv
          key={div.id}
          id={div.id}
          initialPosition={div.initialPosition}
          initialSize={div.initialSize}
        />
      ))}
    </div>
  );
};

export default App;
