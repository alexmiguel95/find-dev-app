import { useState } from 'react';
import {
  View,
  Text,
  Image,
  Linking
} from 'react-native';


import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'

import { ILocalization } from '../../types'

import styles from './style';

export default function Maps() {

  const [find, setFind] = useState<ILocalization>({
    latitude: -27.54449138527775,
    longitude: -48.50007649579188,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })

  
  return (
    <View
      style={styles.container}
    >

      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={find}
      >
        <Marker
          image={require('../../assets/dev1.png')}
          coordinate={{
            latitude: -27.54449138527775,
            longitude: -48.50007649579188,
          }}

        >

          <Callout
          onPress={()=>{Linking.openURL('');} }
          >
            

          </Callout>
        </Marker>


        <Marker
          image={require('../../assets/dev1.png')}
          coordinate={{
            latitude: -27.544152055111326,  
            longitude: -48.496080176629214,
          }}

        >

          <Callout
          onPress={()=>{Linking.openURL('');} }
          >
            

          </Callout>
        </Marker>

        <Marker
          image={require('../../assets/dev1.png')}
          coordinate={{
            latitude: -27.541374290196053,     
            longitude: -48.50039316860574,
          }}

        >

          <Callout
          onPress={()=>{Linking.openURL('');} }
          >
            

          </Callout>
        </Marker>


        <Marker
          image={require('../../assets/dev1.png')}
          coordinate={{
            latitude: -27.547329275426904,      
            longitude: -48.500800864383876,
          }}

        >

          <Callout
          onPress={()=>{Linking.openURL('');} }
          >
            

          </Callout>
        </Marker>

      </MapView>
    </View>



  )
};