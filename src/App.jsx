import './App.css'
import useSwitch from "./useSwitch";
import useDate from "./useDate";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();

  // SNACK 1

  // return (
  //   <div>
  //     <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
  //     <button onClick={toggle}>Cambia Stato</button>
  //   </div>
  // );

  // SNACK 2
  
  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );

}

export default App;