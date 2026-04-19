import "./sobre.css";
import Footer from "../../component/footer/footer";

function Sobre() {
  return (
    <>
      <div className="wiki">

        <section className="wiki-header">
          <h1>📘 Wiki Subnautica</h1>
          <p>Informações básicas para sobreviver no planeta 4546B</p>
        </section>

        <section className="wiki-section">
          <h2>🌊 Biomas</h2>

          <div className="wiki-card">
            <h3>Safe Shallows</h3>
            <p>Área inicial do jogo, segura e rica em recursos básicos.</p>
          </div>

          <div className="wiki-card">
            <h3>Kelp Forest</h3>
            <p>Floresta de algas com recursos úteis, mas com alguns perigos.</p>
          </div>

          <div className="wiki-card">
            <h3>Grassy Plateaus</h3>
            <p>Região aberta com grandes estruturas e criaturas médias.</p>
          </div>
        </section>

        <section className="wiki-section">
          <h2>🐟 Criaturas</h2>

          <div className="wiki-card">
            <h3>Peeper</h3>
            <p>Peixe comum e fonte de alimento.</p>
          </div>

          <div className="wiki-card">
            <h3>Stalker</h3>
            <p>Criatura agressiva encontrada nas florestas de kelp.</p>
          </div>

          <div className="wiki-card">
            <h3>Reaper Leviathan</h3>
            <p>Uma das criaturas mais perigosas do jogo. Evite ao máximo.</p>
          </div>
        </section>

        <section className="wiki-section">
          <h2>⚙️ Equipamentos</h2>

          <div className="wiki-card">
            <h3>Seaglide</h3>
            <p>Permite nadar mais rápido e explorar melhor.</p>
          </div>

          <div className="wiki-card">
            <h3>Scanner</h3>
            <p>Usado para desbloquear blueprints de itens.</p>
          </div>

          <div className="wiki-card">
            <h3>Oxygen Tank</h3>
            <p>Aumenta o tempo de respiração debaixo d'água.</p>
          </div>
        </section>

        <section className="wiki-cta">
          <h2>🌐 Wiki Completa</h2>
          <p>Veja todas as criaturas, biomas e itens do jogo</p>

          <a
            href="https://subnautica.fandom.com/wiki/Subnautica_Wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="wiki-btn"
          >
            Acessar Wiki Completa →
          </a>
        </section>


      </div>
      <Footer />
    </>
  );
}

export default Sobre;