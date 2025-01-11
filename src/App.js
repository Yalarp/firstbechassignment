import React from 'react';
import { DashboardProvider } from './contexts/DashboardContext';
import Dashboard from './components/Dashboard';
import './App.css'; // You can add global styles here

const App = () => {
  return (
    <DashboardProvider>
      <div className="app">
        <Dashboard />
      </div>
    </DashboardProvider>
  );
};

export default App;