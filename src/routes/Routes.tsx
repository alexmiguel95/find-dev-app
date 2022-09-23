import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DeveloperList from '../screens/DeveloperList';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';

export type TypeRoute = {
    DeveloperList: undefined;
    SignIn: undefined;
    SignUp: undefined;
};

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Entrar">
                <Screen name="Lista" component={DeveloperList} />
                <Screen name="Entrar" component={SignIn} />
                <Screen name="Cadastrar" component={SignUp} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Routes;