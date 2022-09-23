import React from 'react';
import { Amplify } from 'aws-amplify';

import './reactotronConfig';
import awsmobile from './src/aws-exports';
import urlOpener from './src/utils/urlOpener';

import Routes from './src/routes/Routes';

import defaultTheme from './src/theme/defaultTheme';
import { ThemeProvider } from 'styled-components/native';

Amplify.configure({
    ...awsmobile,
    oauth: {
        ...awsmobile.oauth,
        urlOpener
    }
});

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Routes />
        </ThemeProvider>
    );
}
