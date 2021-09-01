import { Fragment } from 'react';
import { Screen } from './components/calculator/Screen';
import { Keyboard } from './components/calculator/Keyboard';
import { Rightside } from './components/rightside/Rightside';
import './app.css'

function App() {
  return (
    <Fragment>
      <div className="dark:bg-gray-800 h-full2x md:w-screen md:h-screen flex md:flex-row flex-col md:justify-center md:items-center">
        <div id="calculator" className="bg-gray-200 px-5 my-4 md:my-0 pb-2 dark:bg-gray-700 w-11/12 h-11/12 self-center rounded md:w-1/4 md:h-5/6">
          <div id = "screen" className="relative w-full md:h-1/5">
            <Screen />
          </div>
          <div id = "keyboard" className="relative w-full h-4/5 md:h-4/5">
            <Keyboard />
          </div>
        </div>
        <div id="rightside" className = "md:w-1/3 md:h-5/6 md:ml-10 w-11/12 h-2/5 mt-12 md:mt-0 self-center rounded dark:bg-gray-700 bg-gray-200">
          <Rightside />
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
