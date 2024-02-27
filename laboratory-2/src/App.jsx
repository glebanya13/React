import { useState } from 'react'
import Clock from './components/Clock'
import JobMenu from './components/JobMenu'

function App() {
  const [selectedProfession, setSelectedProfession] = useState('');

  const handleProfessionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProfession(selectedValue);
  };

  return (
    <>
      <Clock format='24' timezone='Europe/Moscow' />
      <Clock format='12' timezone='America/New_York' />

      <div>
        <h1>Выберите профессию:</h1>
        <form>
          <label>
            <input
              type="radio"
              value="developer"
              checked={selectedProfession === 'developer'}
              onChange={handleProfessionChange}
            />
            Разработчик
          </label>
          <label>
            <input
              type="radio"
              value="designer"
              checked={selectedProfession === 'designer'}
              onChange={handleProfessionChange}
            />
            Дизайнер
          </label>
          <label>
            <input
              type="radio"
              value="teacher"
              checked={selectedProfession === 'teacher'}
              onChange={handleProfessionChange}
            />
            Учитель
          </label>
          <label>
            <input
              type="radio"
              value="doctor"
              checked={selectedProfession === 'doctor'}
              onChange={handleProfessionChange}
            />
            Врач
          </label>
          <label>
            <input
              type="radio"
              value="engineer"
              checked={selectedProfession === 'engineer'}
              onChange={handleProfessionChange}
            />
            Инженер
          </label>
        </form>
        <JobMenu selectedProfession={selectedProfession} />
      </div>
    </>
  )
}

export default App
