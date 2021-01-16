import React from 'react';
import data from './data.json';
import Card from './components/Card';

function App() {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        placeholder="Поиск..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {data
        .filter((obj) => {
          const lowerTitle = obj.title.toLowerCase();
          const lowerDesc = obj.description.toLowerCase();
          const lowerInputValue = inputValue.toLocaleLowerCase();
          return lowerTitle.includes(lowerInputValue) || lowerDesc.includes(lowerInputValue);
        })
        .map((obj) => (
          <Card key={obj.image} image={obj.image} title={obj.title} description={obj.description} />
        ))}
    </div>
  );
}

export default App;
