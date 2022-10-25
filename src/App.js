import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function App() {
  return (
    <div className="App">
      {Array(5).fill(<FontAwesomeIcon icon={solid('star')}/>)}
    </div>
  );
}

export default App;
