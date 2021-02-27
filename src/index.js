import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

//Use following code, if toggle dark mode isn't working  using existing method
//by using first method in app.js file of toggle to dark mode isn't working then use following code
//import first from chakraui extendTheme
// const config = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// };

// const theme = extendTheme({ config });

//and set initialColorMode={theme.config.initialColorMode} in ColorModeScript below

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
