import { useSelector } from "react-redux";
import { MainContainer } from "./FooterStyle";


export function Footer() {
    const page = useSelector((state) => state.page.value)
    return (
        <MainContainer>
            <p style ={{margin: 0}}className="text-footer">React Movies Ⓡ 2022 - Todos os direitos reservados. | {page}</p>
        </MainContainer>   
    );
  }