import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Task />
      <TaskList />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
