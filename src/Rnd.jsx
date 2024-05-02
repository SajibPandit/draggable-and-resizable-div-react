import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import './App.css';

const Add = () => {
  const [items, setItems] = useState([
    { id: 1, width: 200, height: 200, x: 0, y: 0 },
    { id: 2, width: 200, height: 200, x: 250, y: 0 },
    { id: 3, width: 200, height: 200, x: 0, y: 250 }
  ]);

  const onResize = (index, direction, style, delta) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], width: style.width, height: style.height };
    setItems(updatedItems);
  };

  const onDrag = (index, _, delta) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], x: updatedItems[index].x + delta.x, y: updatedItems[index].y + delta.y };
    setItems(updatedItems);
  };

  return (
    <div className="App">
      {items.map((item, index) => (
        <Rnd
          key={item.id}
          size={{ width: item.width, height: item.height }}
          position={{ x: item.x, y: item.y }}
          onResize={(e, direction, ref, delta, position) => onResize(index, direction, ref.style, delta)}
          onDrag={(e, d) => onDrag(index, e, d)}
          minWidth={100}
          minHeight={100}
          maxWidth={500}
          maxHeight={500}
          bounds=".App"
          style={{ backgroundColor: 'red', cursor: 'move' }}
        >
          Drag and resize me {item.id}
        </Rnd>
      ))}
    </div>
  );
};

export default Add;
