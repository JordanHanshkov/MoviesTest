import styled from "styled-components";
import { Link } from "react-router-dom";

export const Grid = styled.div`
   display: grid;
   justify-content: center;
   align-items: center; 
   min-height: 20vh;
   margin-left: 20vh;
   margin-right: 20vh;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 3vw;
   padding: 10vh 0;
`

export const CardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    :hover{
        cursor: pointer;
        border: 1px solid #e50914;
    }
    img{
        width: 100%;
        height: 80%;
    }
    .infoContainer{
        display: flex;
        width: 90%;
        flex-direction: column;
        justify-content: center;
        height: 20%;
        align-self: center;
        font-size: 2vh
    }
`