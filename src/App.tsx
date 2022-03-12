import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { useRoutes } from './routes';
// import { RouterProvider } from './providers';

function App() {
  const routes = useRoutes(true)

  return (
    <Router>
      <div className="App">
        {/* <RouterProvider/> */}
        {routes}
      </div>
    </Router>
    )
   
}

export default App;
