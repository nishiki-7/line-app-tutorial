import './App.css';
import SignIn from "./components/SignIn";
import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Line from './components/Line';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      {user ? <Line /> : <SignIn />}
      
    </div>
  )
}

export default App


