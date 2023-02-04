import TaskManagerPage from './pages/TaskManagerPage';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Foter from './components/Footer';

function App() {
  return (
    <TaskManagerPage>
      <Header/>
      <AddTask/>
      <ListTask/>
      <Foter/>
    </TaskManagerPage>
  )
}

export default App;
