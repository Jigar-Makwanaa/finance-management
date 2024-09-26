import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddExpenses from './component/pages/AddExpenses';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addExpenses' element={<AddExpenses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
