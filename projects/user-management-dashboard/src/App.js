import React from 'react';
import './App.css';
import UserList from './components/UserList';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          User Management Dashboard
        </header>
        <main>
          <UserList />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;