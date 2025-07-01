import './App.css'
import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");

  // SNACK 1

  // return (
  //   <div>
  //     <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
  //     <button onClick={toggle}>Cambia Stato</button>
  //   </div>
  // );

  // SNACK 2
  
  // return (
  //   <div>
  //     <h1>Data e ora attuali:</h1>
  //     <p>{currentDate.toLocaleString()}</p>
  //   </div>
  // );

  // SNACK 3

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;