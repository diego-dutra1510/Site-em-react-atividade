import { useState } from "react";
import "./cartao.css";


function Card() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [mensagem, setMensagem] = useState('');

    return (
        <div className="card">
            <h2>Card</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Mensagem: {mensagem}</p>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="number" placeholder="Digite sua idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
            <input type="text" placeholder="Digite uma mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        </div>
    );
}

export default Card;