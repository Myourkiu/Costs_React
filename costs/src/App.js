import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';

import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>

      <Container customClass="min-height">
        <Routes>

          <Route exact path='/' element={<Home/>} />
          <Route exact path='/company' element={<Company/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/newproject' element={<NewProject/>} />
          
        </Routes>
      </Container>
      <footer><p>footer</p></footer>
    </Router>

    
  )
}

export default App;
