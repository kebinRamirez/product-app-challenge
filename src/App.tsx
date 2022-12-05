import './App.css';
import Main from './app/main/main';
//@ts-ignore
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
