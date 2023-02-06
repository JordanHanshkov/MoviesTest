import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetails, getList } from "../../assets/api/api";
import { getMovieDetails } from "../../assets/redux/CounterSlice";
import { CardContainer, Grid } from "./CardFilmesStyle";
import { goToDetails } from "../../assets/redux/CounterSlice";

export function CardFilmes () {
    const [Movies, setState] = useState([]);
    const [movieDetails, setMovieDetails] = useState ();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMovieDetails(movieDetails)) 
    }, [movieDetails])

    useEffect(() => {
        setTimeout(() => getList (setState));
    }, []);

    const onHoverDetails = ( event ) => {
        getDetails(event.target.id, setMovieDetails);
    }

    return (
        <Grid>
            {Movies.map((item) => {
                return (
                    <CardContainer key={item.id} id={item.id} onMouseEnter={onHoverDetails} to={"/details"} onClick={()=>dispatch(goToDetails())}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt={"Poster"}
                            id={item.id}
                        />
                        <div className="infoContainer">
                            <h4>Titulo: {item.title}</h4>
                            <h4>Nota: {item.vote_average}</h4>
                        </div>
                    </CardContainer>
                );
            })}
        </Grid>
    );
}
