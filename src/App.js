import logo from './logo.svg';
import './App.css';
import Hooks_component from './components_state_setState/Hooks_component';
import Hooks_functionC_UseState from './components_state_setState/Hooks_functionC_UseState';
import Hooks_function2_counter from './components_state_setState/Hooks_function2_counter';
import Hooks_counter3 from './components_state_setState/Hooks_counter3';
import Hooks_Array_UseState from './components_state_setState/Hooks_Array_UseState';

import Counter_and_docTitle from './components_useEffect/Counter_and_docTitle';
import Conditionally_run from './components_useEffect/Conditionally_run';
import Only_once_useEffect from './components_useEffect/Only_once_useEffect';
import FetchData_01 from './component_FetchData_useEffect/FetchData_01';
import Fetch_oneDataByID from './component_FetchData_useEffect/Fetch_oneDataByID';
import Id_from_buttonClick from './component_FetchData_useEffect/Id_from_buttonClick';

function App() {
  return (
    <div className="App">
      {/*----------FOR STATE HOOK AND useStat HOOK*/}
      {/*<Hooks_component/>*/}
     {/* <Hooks_functionC_UseState/> */}
     {/*<Hooks_function2_counter/>*/}
     {/*<Hooks_counter3/>*/}
    {/* <Hooks_Array_UseState/>*/}

     {/*----------FOR useEffect HOOK-----------*/}
     {/*<Counter_and_docTitle/>*/}
     {/*<Conditionally_run/>*/}
    {/*<Only_once_useEffect/>*/}
    {/*<FetchData_01/>*/}
    {/*<Fetch_oneDataByID/>*/}
    <Id_from_buttonClick/>

    </div>
  );
}

export default App;
