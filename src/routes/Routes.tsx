import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';

export type TypeRoute = {
    SignIn: undefined;
    SignUp: undefined;
};

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <Navigator initialRouteName="Entrar">
            <Screen name="Entrar" component={SignIn} />
            <Screen name="Cadastrar" component={SignUp} />
        </Navigator>
    );
};

export default Routes;
