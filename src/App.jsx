import './App.css'
import { Counter } from './components/Counter';

function App() {

  const h3Style={
    boxShadow:"0 0 5px gray",
    padding:"10px",
    textAlign:"center"
  }

  const today = new Date()
  console.log(today.toLocaleDateString());
  

  return (
    <>
    <div className='app'>
      <h1 style={{color:'blue',textAlign:'center',textDecoration:"underline"}}>My first react app</h1>
      <h3 style={h3Style}>JSX szintaxis</h3>
      {/*ez egy JSX szintaxiss*/}
      <p>Mai dátum: {today.toLocaleDateString()}</p>
      <Counter />
    </div>
    </>
  )
}

export default App
