import { Fragment } from 'react';
import { Screen } from './components/Screen';
import { Keyboard } from './components/Keyboard';
import './app.scss'

function App() {
  return (
    <Fragment>
      <div className="bg-gray-700 w-screen h-screen flex justify-center items-center">
        <div id="calculadora" className="w-80 h-80">
          <Screen value = { "x" } />
          <Keyboard />
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
