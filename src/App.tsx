import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Blog from './pages/Blog/Blog';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/article' element={<Blog/>} />
        <Route path="/article/:id" element={<ArticlePage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App