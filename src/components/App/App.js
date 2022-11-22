import { useSelector } from 'react-redux';
import './App.scss';

function App() {
  const data = useSelector(state => state.animeArrayData.animeArrayData)
  console.log(data)
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
