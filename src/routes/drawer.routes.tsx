import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "src/screens/Home"
import { Image, } from "react-native";
const Drawer = createDrawerNavigator()

export function Routes() {
    return (
        <Drawer.Navigator 
            screenOptions={({ route }) => ({
                drawerIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ?
                            require('src/assets/home.png') :
                            require('src/assets/home.png')
                    } else if (route.name === 'Lista') {
                        iconName = focused ?
                            require('src/assets/lista.png') :
                            require('src/assets/lista.png')
                    } else if (route.name === 'Favoritos') {
                        iconName = focused ?
                            require('src/assets/heart.png') :
                            require('src/assets/heart.png')
                    } else if (route.name === 'Logout') {
                        iconName = focused ?
                            require('src/assets/logout.png') :
                            require('src/assets/logout.png')
                    }
                    return <Image source={iconName} />


                },

                drawerActiveTintColor: '#000000',
                drawerInactiveTintColor: '#9035E0'

                

            })}>

                
            <Drawer.Screen
                name="Home"
                component={Home}
            />

            <Drawer.Screen
                name="Lista"
                component={Home}
            />

            <Drawer.Screen
                name="Favoritos"
                component={Home}
            />

            <Drawer.Screen 
                name="Logout"
                component={Home}
            />


        </Drawer.Navigator >
    );
}