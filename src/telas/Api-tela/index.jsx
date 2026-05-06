import "./api-tela.css";
import Footer from "../../component/footer/footer";
import { useState } from "react";

function Api_tela({ Globalapi }) {

    const [Id, setId] = useState("");
    const [Nome, setNome] = useState("");

    const listaFiltrada = Globalapi

    console.log(listaFiltrada)

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
                            listaFiltrada.map(livro => (
                                <div key={livro.id} className="card">

                                    <div className="card-header">
                                        <div className="capa">
                                            <img
                                                src={livro.img}
                                                alt={livro.titulo}
                                                style={{ width: '150px' }}
                                            />
                                        </div>
                                        <h3>{livro.titulo}</h3>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="filtrada">Livro não encontrado</div>
                        )}
                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Api_tela;