import { useState } from "react";
import "./home.css";
import video from "../../assets/video/Boot_subnautica.mp4";

import Carousel from "../../component/carousel";

function Home({ startedGlobal, setStartedGlobal }) {
  const [loading, setLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [fade, setFade] = useState(false);
  const [showHome, setShowHome] = useState(false);

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

          <section className="bem-vindo"></section>
        </>
      )}
    </div>
  );
}

export default Home;