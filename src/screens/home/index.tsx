import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { View, Linking, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useTheme } from 'styled-components';
import { IDeveloper } from '../../models/developer';
import { TypeRoute } from '../../routes/Routes';
import developerService from '../../service/developer.service';
import styles from './styles';

type TypeNavigation = NativeStackNavigationProp<TypeRoute, 'Perfil'>;

export default function Maps() {
    const theme = useTheme();
    const navigation = useNavigation<TypeNavigation>();

    const [developerList, setDeveloperList] = useState<IDeveloper[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const initialRegion = {
        latitude: -27.54449138527775,
        longitude: -48.50007649579188,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    useEffect(() => {
        developerService.getAllDeveloper().then(response => {
            setDeveloperList(response);
            setIsLoading(false);
        });
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator color={theme.colors.secondary} size="large" />
            ) : (
                <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={initialRegion}>
                    <Marker
                        image={require('../../assets/icons/dev1.png')}
                        coordinate={{
                            latitude: -27.54449138527775,
                            longitude: -48.50007649579188,
                        }}
                    >
                        <Callout onPress={() => navigation.navigate('Perfil', { id: developerList[0].id })}></Callout>
                    </Marker>

                    <Marker
                        image={require('../../assets/icons/dev1.png')}
                        coordinate={{
                            latitude: -27.544152055111326,
                            longitude: -48.496080176629214,
                        }}
                    >
                        <Callout
                            onPress={() => {
                                Linking.openURL('');
                            }}
                        ></Callout>
                    </Marker>

                    <Marker
                        image={require('../../assets/icons/dev1.png')}
                        coordinate={{
                            latitude: -27.541374290196053,
                            longitude: -48.50039316860574,
                        }}
                    >
                        <Callout
                            onPress={() => {
                                Linking.openURL('');
                            }}
                        ></Callout>
                    </Marker>

                    <Marker
                        image={require('../../assets/icons/dev1.png')}
                        coordinate={{
                            latitude: -27.547329275426904,
                            longitude: -48.500800864383876,
                        }}
                    >
                        <Callout
                            onPress={() => {
                                Linking.openURL('');
                            }}
                        ></Callout>
                    </Marker>
                </MapView>
            )}
        </View>
    );
}
