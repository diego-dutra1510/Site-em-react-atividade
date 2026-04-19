import { useState } from "react";
import "./cartao.css";


function Card() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [mensagem, setMensagem] = useState('');

    return (
        <div className="card">
            <h2>Sobrevinte Da Aurora</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Mensagem: {mensagem}</p>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="number" placeholder="Digite sua idade" min="0" max="100" value={idade} onChange={(e) => { const value = parseInt(e.target.value); if (!isNaN(value) && value >= 0 && value <= 100) setIdade(value); else setIdade(0); }} />    
            <input type="text" placeholder="Digite uma mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        </div>
    );
}

export default Card;