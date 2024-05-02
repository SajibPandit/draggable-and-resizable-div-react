// import React, { useState } from 'react';
// import Draggable from 'react-draggable';
// import { Rnd } from 'react-rnd';
// import './App.css'; // Import your CSS file for styling

// const MoveableResizableDiv = () => {
//   const [divs, setDivs] = useState([
//     { id: 1, position: { x: 50, y: 50 }, size: { width: 200, height: 200 } },
//     { id: 2, position: { x: 250, y: 150 }, size: { width: 150, height: 150 } },
//   ]);

//   const handleDrag = (index, e, ui) => {
//     const newDivs = [...divs];
//     newDivs[index].position = { x: ui.x, y: ui.y };
//     setDivs(newDivs);
//   };

//   const handleResize = (index, direction, ref, delta, position) => {
//     const newDivs = [...divs];
//     newDivs[index].size = {
//       width: ref.style.width,
//       height: ref.style.height
//     };
//     setDivs(newDivs);
//   };

//   return (
//     <div className="container">
//       {divs.map((div, index) => (
//         <Draggable
//         key={div.index}
//         bounds="parent" // Restrict dragging within parent element
//         defaultPosition={{ x: div.position.x, y: div.position.y }}
//         onStop={(e, ui) => handleDrag(index, e, ui)}
//     >
//         <Rnd
//             className="resizable"
//             size={{ width: div.size.width, height: div.size.height }}
//             // minWidth={100}
//             // minHeight={100}
//             // maxWidth={400}
//             // maxHeight={400}
//             onResize={(e, direction, ref, delta, position) => handleResize(index, direction, ref, delta, position)}
//         >
//             <div className="box">



//                 Resizable Div {div?.name}

//             </div>
//         </Rnd>
//     </Draggable>
//       ))}
//     </div>
//   );
// };

// const DragAndMovabeDivs = () => {
//   return (
//     <div>
//       <MoveableResizableDiv />
//     </div>
//   );
// };

// export default DragAndMovabeDivs;


// import React, { useState } from 'react';
// import Draggable from 'react-draggable';
// import { Rnd } from 'react-rnd';
// import './App.css';

// const MoveableResizableDiv = () => {
//   const [divs, setDivs] = useState([
//     { id: 1, position: { x: 50, y: 50 }, size: { width: 200, height: 200 } },
//     { id: 2, position: { x: 250, y: 150 }, size: { width: 150, height: 150 } },
//   ]);

//   const handleDrag = (index, e, ui) => {
//     const newDivs = [...divs];
//     newDivs[index].position = { x: ui.x, y: ui.y };
//     setDivs((prev) => ({ ...prev, ...newDivs }));
//     console.log(divs)
//   };

//   const handleResize = (index, direction, ref, delta, position) => {
//     const newDivs = [...divs];
//     newDivs[index].size = {
//       width: ref.style.width,
//       height: ref.style.height
//     };
//     // setDivs(newDivs);
//     setDivs((prev) => ({ ...prev, ...newDivs }));
//   };

//   return (
//     <div className="container">
//       {divs.map((div, index) => (
//         <Draggable
//           key={div.id}
//           defaultPosition={{ x: div.position.x, y: div.position.y }}
//           bounds="parent" // Restrict dragging within parent element
//           onStop={(e, ui) => handleDrag(index, e, ui)}
//         >
//           <Rnd
//             className="resizable"
//             size={{ width: div.size.width, height: div.size.height }}
//             minWidth={100}
//             minHeight={100}
//             maxWidth={400}
//             maxHeight={400}
//             onResize={(e, direction, ref, delta, position) => handleResize(index, direction, ref, delta, position)}
//           >
//             <div className="box">Resizable Div {div.id}</div>
//           </Rnd>
//         </Draggable>
//       ))}
//     </div>
//   );
// };

// const DragAndMovabeDivs = () => {
//   return (
//     <div>
//       <MoveableResizableDiv />
//     </div>
//   );
// };

// export default DragAndMovabeDivs;
