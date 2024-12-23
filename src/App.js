import './App.css';
import Contactform from './Components/Contactform';
import Parent from './Components/Parent';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
      <Todo /><hr/>
      <Parent /><hr/>
      <Contactform />
    </div>
  );
}

export default App;
