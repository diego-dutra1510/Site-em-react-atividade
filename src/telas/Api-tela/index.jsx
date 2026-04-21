import "./api-tela.css";
import Footer from "../../component/footer/footer";
import { useState } from "react";

function Api_tela({ Globalapi }) {

    const [Id, setId] = useState("");
    const [Nome, setNome] = useState("");

    const listaFiltrada = Globalapi.filter(user => {
        const matchId = Id === "" || user.id === Number(Id);
        const matchNome = Nome === "" || user.name.toLowerCase().includes(Nome);

        return matchId && matchNome;
    });

    return (
        <>
            <div className="api" />

            <div className="main_api">

                <div className="box_input">

                    <h2>Insira o id do usuário</h2>
                    <input
                        type="number"
                        value={Id}
                        min={1}
                        onChange={(e) => setId(e.target.value)}
                    />

                    <h2>Buscar por nome</h2>
                    <input
                        type="text"
                        placeholder="Digite o nome do usuário"
                        onChange={(e) => setNome(e.target.value.toLowerCase())}
                    />

                </div>

                <div className="user">

                    <h1>Lista de Usuários</h1>

                    <div className="todas fade">
                        {listaFiltrada.length > 0 ? (
                            listaFiltrada.map(user => (
                                <div key={user.id} className="card">

                                    <div className="card-header">
                                        <div className="avatar">
                                            {user.name.charAt(0)}
                                        </div>
                                        <h3>{user.name}</h3>
                                    </div>

                                    <div className="card-body">
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Cidade:</strong> {user.address.city}</p>
                                    </div>

                                </div>
                            ))
                        ) : (
                            <div className="filtrada">Usuário não encontrado</div>
                        )}
                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Api_tela;