import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './component/header/header';

import Home from './telas/home-tela/home';
import Sobre from './telas/sobre-tela/sobre';

function App() {
  const [pdaStarted, setPdaStarted] = useState(false);

  return (
    <Router>
      <div id='main'>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home startedGlobal={pdaStarted} setStartedGlobal={setPdaStarted} />}
          />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;