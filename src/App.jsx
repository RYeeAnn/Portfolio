import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Blog from './Pages/HomePage/Blog';
import BlogPost from './Components/Blog/Blogpost';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path='/blog' element={ <Blog />} />
      <Route path='/blog/:slug' element={ <BlogPost />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
