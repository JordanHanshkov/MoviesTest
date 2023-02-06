import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { Grid } from "../../components/cardFilmes/CardFilmesStyle";
import { useDispatch, useSelector } from "react-redux";
import { MainContainer, RightSide } from "./DetailsStyle";
import { goToIndex } from "../../assets/redux/CounterSlice";
import { HeaderDetails } from "../../components/header/HeaderDetails";

 export default function Details () {
    const state = useSelector((state) => state.page.value2);
    const dispatch = useDispatch();

        return (
            <MainContainer> 
                <HeaderDetails></HeaderDetails>
                <Grid>
                    <img src={`https://image.tmdb.org/t/p/w500/${state.data.poster_path}`}/>

                    <RightSide>
                        <p className="subtitle-details"><b>Título:</b>{state.data.title}</p>
                        <p className="description-details">
                        <b>Sinopse:</b> {state.data.overview}</p>
                        <p className="Date-movie"><b>Data do lançamento: </b> {state.data.release_date}</p>
                        <p><b>Nota:</b> {state.data.vote_average}</p>
                        <Link to="/" onClick={()=>dispatch(goToIndex())}>Voltar para Home</Link>
                    </RightSide>
                </Grid>
                <Footer></Footer>
            </MainContainer>
        )

 }


