import { useState, useEffect } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [savedColors, setSavedColors] = useState([]);

  useEffect(() => {
    const storedColors = JSON.parse(localStorage.getItem('savedColors')) || [];
    setSavedColors(storedColors);
  }, []);

  useEffect(() => {
    localStorage.setItem('savedColors', JSON.stringify(savedColors));
  }, [savedColors]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleReset = () => {
    setSelectedColor('#ffffff');
  };

  const handleSave = () => {
    setSavedColors([...savedColors, selectedColor]);
  };

  return (
    <div>
      <div>
        <h2>Выбранный цвет: {selectedColor}</h2>
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: selectedColor,
            border: '1px solid #000',
          }}
        ></div>
      </div>

      <div>
        <h2>Палитра цветов</h2>
        <button onClick={() => handleColorChange('#ff0000')}>Красный</button>
        <button onClick={() => handleColorChange('#00ff00')}>Зеленый</button>
        <button onClick={() => handleColorChange('#0000ff')}>Синий</button>
      </div>

      <div>
        <button onClick={handleReset}>Сбросить</button>
        <button onClick={handleSave}>Сохранить</button>
      </div>

      <div>
        <h2>Сохраненные цвета</h2>
        <ul>
          {savedColors.map((color, index) => (
            <li key={index} style={{ backgroundColor: color }}>
              {color}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorPicker;
