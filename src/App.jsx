import { useState } from 'react';
import './App.css';

function App() {

  const [bgColor, setBgColor] = useState('#f1f5f3');
  const [colorMode, setColorMode] = useState('hex'); 

  function getRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const hexColors = ['#4881BC', '#E1DD62', '#A06C9E', '#53E110', '#4C58D7', '#396FD8', '#6DDC93', '#3360A4', '#4491BB', '#669392', '#4C63E7', '#2B42C6', '#228470'];
  const simpleColors = ['Chocolate', 'Pink', 'Red', 'Blue', 'Green', 'Violet', 'Indigo', 'Orange', 'Brown', 'Yellow'];

  const randomColor = colorMode === 'hex' ? getRandomColor(hexColors) : getRandomColor(simpleColors);

  return (
    <>
      <div className='navbar'>
        <h2>Color Flipper</h2>
        <div className='nav-btns'>
          <a onClick={() => setColorMode('simple')}>Simple</a>
          <a onClick={() => setColorMode('hex')}>Hex</a>
        </div>
      </div>
      <div className='body' style={{ backgroundColor: bgColor }}>
        <h2>Background Color: {bgColor} </h2>
        <button className='change-btn' onClick={() => setBgColor(randomColor)}>Change Color</button>
      </div>
    </>
  )
}

export default App;
