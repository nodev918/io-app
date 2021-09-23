import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar'
import Chat from './components/views/chat/Chat'
import { names } from './mock/data'

export const NameContext = React.createContext()

function App() {

  return (
    <>
      
      <NameContext.Provider value={names}>
        <Navbar />
        <Chat />
      </NameContext.Provider>
    </>
  );
}

export default App;
