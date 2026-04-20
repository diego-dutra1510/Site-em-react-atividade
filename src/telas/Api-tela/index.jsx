import "./api-tela.css";
import Footer from "../../component/footer/footer";
import { useState } from "react";

function Api_tela({ Globalapi, setGlobalapi }) {

    const [Id, setId] = useState();

    const Filtrar_user = () => {
        const result_filter = Globalapi.filter(user => user.id === Id)

        setGlobalapi(result_filter);
    };

    return (
        <>
            <div className="api" />
            <div className="box_input">

                <h2>Insira o id do usuário </h2>
                <input
                    type="number"
                    value={Id}
                    min={0}
                    onChange={(e) => setId(Number(e.target.value))}
                />
                {
                    Globalapi.map(user => <div key={user.id}>{user.name}</div>)
                }

            </div>
            <Footer />
        </>
    );
}

export default Api_tela;