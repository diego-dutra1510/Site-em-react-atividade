import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import api from "./component/Api/api"

import Header from './component/header/header';

import Home from './telas/home-tela/home';
import Sobre from './telas/sobre-tela/sobre';
import Api_tela from './telas/Api-tela/index'

function App() {
  const [pdaStarted, setPdaStarted] = useState(false);
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    api.get(`/livros`).then(response => {

      setLivros(response.data);

    })

      .catch(error => {

        console.error("Erro ao carregar dados", error);

      })

      .finally(() => setLoading(false));

  }, []);

  return (
    <Router>
      <div id='main'>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home startedGlobal={pdaStarted} setStartedGlobal={setPdaStarted} />}
          />
          <Route path="/wiki" element={<Sobre />} />
          <Route path="/API" element={<Api_tela Globalapi={livros} setGlobalapi={setLivros} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;