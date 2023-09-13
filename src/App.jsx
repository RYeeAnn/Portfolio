import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
