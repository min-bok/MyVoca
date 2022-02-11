import './css/style.css'
import Header from './components/Header'
import DayList from './components/DayList'
import Day from './components/Day'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <DayList />
      <Day />
    </>
  );
}

export default App;
