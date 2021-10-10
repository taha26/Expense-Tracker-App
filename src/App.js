import React, { } from 'react';
import './App.css';
import { Header } from './Components/Header'
import { CurrentBalance } from './Components/CurrentBalance'
import { Expense } from './Components/Expense'
import { TransactionHistory } from './Components/TransactionHistory'
import { AddTransaction } from './Components/AddTransaction'
import { GlobalProvider } from "./Context-Reducer/AppContext"


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <CurrentBalance />
        <Expense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
