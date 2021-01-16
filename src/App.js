import data from './data.json';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      {data.map((obj) => (
        <Card key={obj.image} {...obj} />
      ))}
    </div>
  );
}

export default App;
