import './css/style.css'
import Header from './components/Header'
import DayList from './components/DayList'
import Day from './components/Day'
import Error from './components/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateWord from './components/CreateWord'

function App() {
  // let i = 1;

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<DayList />}></Route>
        <Route path='/day/:day' element={<Day />}></Route>
        {/* <Route path='/create_word' element={<CreateWord />}></Route> */}
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
