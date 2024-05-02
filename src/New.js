import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Draggable from 'react-draggable';
import './App.css';

const New = () => {
  const [items, setItems] = useState([
    { id: 1, width: 200, height: 200, x: 555, y: 0 },
    { id: 2, width: 200, height: 200, x: 250, y: 0 },
    { id: 3, width: 200, height: 200, x: 55, y: 250 }
  ]);

  const onResize = (index, direction, ref, delta, position) => {
    const updatedItems = [...items];
    updatedItems[index].width = ref.style.width;
    updatedItems[index].height = ref.style.height;
    setItems(updatedItems);
  };

  const onDrag = (index, e, d) => {
    const updatedItems = [...items];
    updatedItems[index].x = d.x;
    updatedItems[index].y = d.y;
    setItems(updatedItems);
  };

  return (
    <div className="App">
      {items.map((item, index) => (
        <Draggable key={item.id} onDrag={(e, d) => onDrag(index, e, d)}>
          <Rnd
            size={{ width: item.width, height: item.height }}
            position={{ x: item.x, y: item.y }}
            onResize={(e, direction, ref, delta, position) => onResize(index, direction, ref, delta, position)}
            minWidth={100}
            minHeight={100}
            maxWidth={500}
            maxHeight={500}
            bounds=".App"
            style={{ backgroundColor: 'red', cursor: 'move' }}
          >
            Drag and resize me {item.id}
          </Rnd>
        </Draggable>
      ))}
    </div>
  );
};

export default New;
