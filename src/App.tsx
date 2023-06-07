import React from 'react';
import {AuthPage} from "./pages/auth-page";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {HashRouter} from "react-router-dom";

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: "Montserrat",
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 700,
        },
    })
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <AuthPage/>
            </ThemeProvider>
        </HashRouter>
    );
}

export default App;
