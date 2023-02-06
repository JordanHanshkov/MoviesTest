
import React from "react";
import { Footer } from '../../components/footer/Footer';
import { Header } from "../../components/header/Header";

import ListaFilmes from '../home/ListaFilmes'
import { HomePai, Topo } from "./HomeStyle";



class Home extends React.Component {
    render (){
        return (
            
            <HomePai className="home">
                <Header/>
                <Topo/>
                <ListaFilmes/>
                <Footer/>
            </HomePai>
        );
    }
}

export default Home;
  