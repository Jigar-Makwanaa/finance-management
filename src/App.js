import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddExpenses from './component/pages/AddExpenses';
import ViewExpenses from './component/pages/ViewExpenses';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addExpenses' element={<AddExpenses />} />
          <Route path='/viewExpenses' element={<ViewExpenses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
