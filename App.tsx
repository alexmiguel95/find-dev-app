import React from 'react';
import { Amplify } from 'aws-amplify';
import { enableLatestRenderer } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes/Routes';
import defaultTheme from './src/theme/defaultTheme';
import './reactotronConfig';
import awsmobile from './src/aws-exports';
import urlOpener from './src/utils/urlOpener';

Amplify.configure({
    ...awsmobile,
    oauth: {
        ...awsmobile.oauth,
        urlOpener,
    },
});

enableLatestRenderer();

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
}
