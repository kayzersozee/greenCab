import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bgPrimary: "#fff",
  bgSecondary: "#fff",
  color: "#000",
};

export const darkTheme = {
  bgPrimary: "#272727",
  bgSecondary: "#1a1a1a",
  color: "#fff",
};

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.bgPrimary};
        color: ${(props) => props.theme.color};
    }
    a{
      color: ${(props) => props.theme.color};
    }
`;
