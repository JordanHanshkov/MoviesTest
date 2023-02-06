import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getDetails } from "../../assets/api/api";
import CardFilmesImage from "../../assets/images/goku.jpg";

export function Filmes () {
    const [Filmes, setState] = useState([]);

    useEffect(() => {
        getDetails (436270) ;
    }, []);

    return (
        <div className="Lista-filmes">
            {Filmes.map((item) => {
                return (
                    <section className="card">
                        <img src={CardFilmesImage} alt="" />
                        <p>
                            <b>Titulo:</b> {item.title}
                        </p>
                        <p> 
                            <b>Avaliação:</b> {item.overview}
                        </p>
                        <NavLink className="navbar-item" to="/details/436270">
                            Detalhes
                        </NavLink>
                    </section>
                );
            })}

        </div>
    );

}
