import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes/Routes';
import defaultTheme from './src/theme/defaultTheme';
import './reactotronConfig';
import { enableLatestRenderer } from 'react-native-maps';

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
