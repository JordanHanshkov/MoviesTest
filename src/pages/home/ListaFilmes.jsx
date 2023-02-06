import React from "react";
import {CardFilmes} from '../../components/cardFilmes/Card-filmes';
import { Body, Subtitle } from "./StyleLista";


class ListaFilmes extends React.Component {
    render(){
        return (
            <Body>
                <Subtitle>
                    <h2 className="subtitle-pop"><b>FILMES POPULARES</b></h2>
                </Subtitle>
                <CardFilmes></CardFilmes>
            </Body>
        );
    }
}

export default ListaFilmes;