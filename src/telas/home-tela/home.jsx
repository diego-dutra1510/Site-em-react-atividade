import { useState } from "react";
import "./home.css";
import video from "../../assets/video/Boot_subnautica.mp4";
import banner from "../../assets/imagem/Subnautica.jpg";

function Home() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [fade, setFade] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setLoading(true);
  };

  const handleEnd = () => {
    setFade(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      {!started && (
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

      {started && !loading && (
        <>
          <div className="Image-fundo">
            <img
              src={banner}
              className={imgLoaded ? "img loaded" : "img"}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
          <section className="bem-vindo"></section>
        </>
      )}
    </div>
  );
}

export default Home;
