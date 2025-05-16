import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}
    html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

 h1{
    font-size: 6rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.heading};
  }  
    h2{
        color: ${({ theme }) => theme.colors.heading};
        font-size: 4.4rem;
        font-weight: 300;
        white-space: normal;
        text-align: center;
    }
    h3{
        font-size: 1.8rem;
        font-weight: 400;
    }

    p{
    color: ${({ theme }) => theme.colors.text};
        font-size: 1.6rem; 
        font-weight: 400;
        opacity: .7;
        line-height: 1.5;
        margin-top: 1rem;}

    a{
       text-decoration: none;}
       
       li{
        list-style: none;}

    .container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
`;
