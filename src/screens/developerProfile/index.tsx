import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Alert,
  ActivityIndicator
} from 'react-native';
import { useTheme } from 'styled-components/native';

import developerService from '../../service/developer.service';

import { IDeveloper } from '../../models/developer';

import {
  Container,
} from './style';

const Profile = ({ navigation, route }) => {
  const theme = useTheme();

  const [developer, setDeveloper] = useState<IDeveloper>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const errorHandling = (): any => {
    Alert.alert("Erro!", "Erro ao encontrar desenvolvedor, tente novamente");
    navigation.navigate("LISTA");
  }

  useEffect(() => {
    const fetchDeveloperData = async () => {

      const developerData = route.params.item;
      if (!developerData) throw new Error;

      const categoryData = await  developerService.getStack(developerData.category);
      const stateData = await  developerService.getState(developerData.state);
      
      setDeveloper({
        ...developerData,
        category: categoryData.label,
        state: stateData.value,
      });
      setIsLoading(false);
    }
  
    fetchDeveloperData()
      .catch(() => errorHandling());
  }, [])

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.secondary} size="large" />
      ) : (
        <View>
          <Text>Here</Text>
        </View>
      )}
    </Container>
  );
}

export default Profile;