import { useSelector } from "react-redux";
import { MainContainer } from "./HeaderDStyle";


export function HeaderDetails(){
    const state = useSelector((state) => state.page.value2)

    return(
        <MainContainer>
            <h1> {state.data.title}</h1>
            <p>Home | Favoritos</p>
        </MainContainer>
    )
}