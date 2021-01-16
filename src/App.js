import data from './data.json';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      {data.map((obj) => (
        <Card key={obj.image} img={obj.image} title={obj.title} desc={obj.description} />
      ))}
    </div>
  );
}

export default App;
