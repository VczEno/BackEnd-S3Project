import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Main } from './pages/Main';
import { PostDetails } from './pages/PostDetails';




function App() {
  const endpoint='http://localhost/BackEnd-S2Project/wp-json/wp/v2/'
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main endpoint={endpoint}/>}/>
      <Route path='/post/:id' element={<PostDetails endpoint= {endpoint}/>} />
    </Routes>
   
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
