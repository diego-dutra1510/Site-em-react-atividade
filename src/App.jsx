import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './component/header/header';

import Home from './telas/home-tela/home';
import Sobre from './telas/sobre-tela/sobre';


function App() {
  

  return (
    <Router>
      <div id='main'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App