import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Home from '../screens/home';
import DeveloperList from '../screens/DeveloperList';
import { Image } from 'react-native';
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

export function Routes() {
    return (
        <Drawer.Navigator
            initialRouteName="Lista"
            screenOptions={({ route }) => ({
                drawerIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? require('../assets/icons/home.png') : require('../assets/icons/home.png');
                    } else if (route.name === 'Lista') {
                        iconName = focused ? require('../assets/icons/lista.png') : require('../assets/icons/lista.png');
                    } else if (route.name === 'Favoritos') {
                        iconName = focused ? require('../assets/icons/heart.png') : require('../assets/icons/heart.png');
                    } else if (route.name === 'Logout') {
                        iconName = focused ? require('../assets/icons/logout.png') : require('../assets/icons/logout.png');
                    }
                    return <Image source={iconName} />;
                },

                drawerActiveTintColor: '#000000',
                drawerInactiveTintColor: '#9035E0',
            })}
        >
            <Drawer.Screen name="Lista" component={DeveloperList} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Favoritos" component={Home} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
}
