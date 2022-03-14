import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { useRoutes } from './routes';
import store from './store';
type RootState = ReturnType<typeof store.getState>

function App() {
  const isAuth = useSelector((state:RootState) => state.todo.isAuth)
  const routes = useRoutes(isAuth)

  return (
    <Router>
      <div className="App">
        {routes}
      </div>
    </Router>
    )
   
}

export default App;
