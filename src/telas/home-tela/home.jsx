import { useState, useEffect } from "react";
import "./home.css";
import video from "../../assets/video/Boot_subnautica.mp4";
import { useLocation } from "react-router-dom";


import Carousel from "../../component/carousel";
import Card from "../../component/cartão";
import Footer from "../../component/footer/footer";

function Home({ startedGlobal, setStartedGlobal }) {
  const [loading, setLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [fade, setFade] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowHome(true);
    }
  }, [location.pathname]);

  const handleStart = () => {
    setStartedGlobal(true);
    setLoading(true);
    setShowHome(false);
  };

  const handleEnd = () => {
    setFade(true);
    setTimeout(() => {
      setLoading(false);
      setShowHome(true);
    }, 1000);
  };

  return (
    <div>
      {!startedGlobal && (
        <div className="start-screen" onClick={handleStart}>
          <h1>Click para iniciar o PDA</h1>
        </div>
      )}

      {loading && (
        <div className={`loading ${fade ? "sumir" : ""}`}>
          <video autoPlay onEnded={handleEnd} className="video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}

      {startedGlobal && !loading && (
        <>
          <div className={`Image-fundo ${showHome ? "show" : ""}`}>
            <Carousel />
          </div>

          <section className="bem-vindo">
            <Card />
          </section>

          <section className="conteudo">
            <div className="o-que-e">
              <h2>O que é o Subnautica?</h2>
              <p>
                O Subnautica é um jogo de sobrevivência e exploração subaquática desenvolvido pela Unknown Worlds Entertainment. Lançado em 2018, o jogo se passa em um planeta alienígena coberto por oceanos, onde os jogadores assumem o papel de um sobrevivente de um acidente espacial. O objetivo principal é explorar o ambiente subaquático, coletar recursos, construir bases e sobreviver aos perigos do oceano, como criaturas hostis e condições ambientais desafiadoras. O Subnautica é conhecido por sua atmosfera imersiva, gráficos impressionantes e uma narrativa envolvente que se desenrola à medida que os jogadores exploram as profundezas do planeta.
              </p>
            </div>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;