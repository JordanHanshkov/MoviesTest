import axios from "axios";

export const getList = (setState) => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5d5ae5b8ddabe8881139fd382f974dd1&language=pt-BR&page=1").then((response)=>{
        setState(response.data.results)
        console.log(response.data.results)
    }).catch((error)=>{
        console.log(error)
    })
}

export const getDetails =  (id, setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5d5ae5b8ddabe8881139fd382f974dd1&language=pt-BR`).then((response)=>{
        setState (response)

    }).catch((error)=>{
        console.log(error)
    })
}