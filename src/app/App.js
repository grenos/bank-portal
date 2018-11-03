import React from 'react';
import { StateProvider } from '../provider/StateProvider';

import './app.css';
import Dashboard from '../desktop/dashboard/Dashboard';

const App = () => {
  return (
    <StateProvider>
      <div className="app">
        <Dashboard />
      </div>
    </StateProvider>
  );
};

export default App;
