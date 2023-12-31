﻿import {Catalog} from "../../features/catalog/catalog.tsx";
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Header} from "./Header.tsx";
import {ChangeEvent, useState} from "react";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    
    const [darkMode, setDarkMode] = useState(false)
    
    
    const paletteType = darkMode? 'dark' : 'light';
    
    const theme = createTheme({
        palette: {
            mode: paletteType, 
            background: {
                default: paletteType === 'light'? '#eaeaea' : '#121212'
            }
        },
    })

    const handleDarkModeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDarkMode(event.target.checked);
    }


    return (
        <ThemeProvider theme={theme}>
            <ToastContainer position={'bottom-right'} hideProgressBar theme={'colored'} />
                <CssBaseline></CssBaseline>
                <Header
                    darkMode={darkMode}
                    handleSwitchChange={handleDarkModeChange}
                ></Header>
                <Container>
                    <Outlet/>
                </Container>
        </ThemeProvider>
    )
}

export default App;