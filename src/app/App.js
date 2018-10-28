import React, { Component } from 'react';
import { StateProvider } from '../provider/StateProvider';

import './app.css';
import Dashboard from '../desktop/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <StateProvider>
        <div className="app">
          <Dashboard />
        </div>
      </StateProvider>
    );
  }
}

export default App;
