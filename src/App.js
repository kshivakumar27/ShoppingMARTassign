import {useState, useEffect} from 'react';
import Load from './components/Loader/Load';
import Main from './components/Main/Main';
import './App.css';


function App() {

  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData(){
      try{
        const URL = 'https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json';
        const response = await fetch(URL);
        let text = await response.text();
        text = JSON.parse(text.slice(0, 24363) + text.slice(24364));
        setData(text);
        setLoad(true);
      }
      catch(e){
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {load ? <Main data={data} /> : <Load />}
    </div>
    
  );
}

export default App;
