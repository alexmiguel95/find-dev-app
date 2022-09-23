import { createStackNavigator } from '@react-navigation/stack';
import { Routes as DrawerRoutes } from './Drawer.routes';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import DeveloperProfile from '../screens/developerProfile';
import { IDeveloper } from '../models/developer';

export type TypeRoute = {
    Entrar: undefined;
    Cadastrar: undefined;
    Menu: undefined;
    Perfil: { item: IDeveloper }
};

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <Navigator initialRouteName="Entrar" screenOptions={{ headerShown: false }}>
            <Screen name="Entrar" component={SignIn} />
            <Screen name="Cadastrar" component={SignUp} />
            <Screen name="Menu" component={DrawerRoutes} />
            <Screen name="Perfil" component={DeveloperProfile} />
        </Navigator>
    );
};

export default Routes;
