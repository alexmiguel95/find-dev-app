import { createStackNavigator } from '@react-navigation/stack';
import DeveloperList from '../screens/DeveloperList';

export type TypeRoute = {
    DeveloperList: undefined;
};

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <Navigator initialRouteName="LISTA">
            <Screen name="LISTA" component={DeveloperList} />
        </Navigator>
    );
};

export default Routes;