import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes/Routes';
import defaultTheme from './src/theme/defaultTheme';
import './reactotronConfig';

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
}
