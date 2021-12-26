import './App.css';
import { Checkboxes, CheckboxesPerf, CheckForDev, CheckForDevClass } from './components';

function App() {
  return (
    <div className="App">
      <h1>Check your console and see what components are rendered on radio click event.</h1>
      <div className="grid-container">
        <Checkboxes />
        <CheckboxesPerf /> 
        {/* <CheckForDev /> */}
        {/* <CheckForDevClass /> */}
      </div>
    </div>
  );
}

export default App;
