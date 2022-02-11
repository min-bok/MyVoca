import './css/style.css'
import Header from './components/Header'
import DayList from './components/DayList'
import Day from './components/Day'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // let i = 1;

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<DayList />}></Route>
        <Route path='/day/:day' element={<Day />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
