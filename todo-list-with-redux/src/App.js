import { Provider } from 'react-redux';
import './App.css';
import TodoContainer from './components/todo-container/TodoContainer';
import { store } from './redux/store';

function App() {
  return (
    <>
    <h1>Lets Code 🎉 | TODO APP WITH REDUX</h1>
    <Provider store={store}><TodoContainer/></Provider>
    </>
  );
}

export default App;
