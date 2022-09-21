import { createStackNavigator } from '@react-navigation/stack';
import DeveloperList from '../screens/DeveloperList';
import SignUp from '../screens/signUp';

export type TypeRoute = {
    DeveloperList: undefined;
};

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <Navigator initialRouteName="LISTA">
            <Screen name="LISTA" component={SignUp} />
        </Navigator>
    );
};

export default Routes;