import './App.css';
import { FirstGoal } from './components/FirstGoal';
import { GoalList } from './components/GoalList';
import { SecondGoal } from './components/SecondGoal';
//import Check from './childcheck';


function App() {
  return (
    <div className="App">
      <div>
        {/* <p>this is my root component</p> */}

        <GoalList>
            

        </GoalList>

      </div>
    </div>
  );
}

export default App;
