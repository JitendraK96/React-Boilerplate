import './App.css';
import { Provider } from 'react-redux';
import store from '../src/Store';
import Routes from '../src/Routes'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
