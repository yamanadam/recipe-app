import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Georgia, 'Times New Roman', Times, serif;

    }
    body{
        font-size:1.7rem ;
        background-color:${({ theme }) => theme.colors.mainColor}
    }
 
`;
