import { createStackNavigator } from '@react-navigation/stack';
import DeveloperList from '../screens/DeveloperList';
import DeveloperProfile from '../screens/developerProfile';

export type TypeRoute = {
    DeveloperList: undefined;
};

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <Navigator initialRouteName="LISTA">
            <Screen name="LISTA" component={DeveloperList} />
            <Screen name="PERFIL" component={DeveloperProfile} />
        </Navigator>
    );
 };
  
 export default Routes;