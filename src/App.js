import './App.css';
import { Provider } from 'react-redux';
import store from '../src/Store';
import Routes from '../src/Routes'
import { useState } from 'react';

import { UserContext } from './Services/UserContext'

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Provider store={store}>
      <div className="App">
        <UserContext.Provider value={{ users, setUsers }}>
          <Routes />
        </UserContext.Provider>
      </div>
    </Provider>
  );
}

export default App;
