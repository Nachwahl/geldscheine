import React from 'react'
import './App.css'
import {ColorSchemeProvider, MantineProvider, Title} from "@mantine/core";
import {useColorScheme, useLocalStorage} from "@mantine/hooks";
import Home from "./page/Home.jsx";
import { NotificationsProvider } from '@mantine/notifications';



function App() {

    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useLocalStorage({
        key: 'theme',
        defaultValue: preferredColorScheme,
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme}}>
                <NotificationsProvider>
                    <Home/>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
