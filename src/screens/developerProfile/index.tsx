import { useEffect, useState } from 'react';
import {
  View,
  Alert,
  ActivityIndicator,
  Pressable,
  Linking,
} from 'react-native';
import { useTheme } from 'styled-components/native';

import developerService from '../../service/developer.service';

import { IDeveloper } from '../../models/developer';

import WhatsappSvg from '../../assets/icons/whatsapp.svg';
import GithubSvg from '../../assets/icons/github.svg';
import LinkdinSvg from '../../assets/icons/linkdin.svg';
import LocationSvg from '../../assets/icons/location.svg';

import {
  Container,
  DeveloperPhoto,
  DeveloperName,
  DeveloperDescription,
  DeveloperStack,
  SocialIcons,
  DeveloperLocationContainer,
  DeveloperLocation,
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
      {isLoading && !developer ? (
        <ActivityIndicator color={theme.colors.secondary} size="large" />
      ) : (
        <View style={{alignItems: "center", justifyContent: "center"}}>
          <DeveloperPhoto source={{ uri: `${developer.photo}` }} />
          <DeveloperName>{developer.name}</DeveloperName>
          <DeveloperLocationContainer>
            <LocationSvg style={{ marginRight: 8 }} />
            <DeveloperLocation>{developer.state}</DeveloperLocation>
          </DeveloperLocationContainer>
          <DeveloperDescription>{developer.description}</DeveloperDescription>
          <DeveloperStack>{developer.stack}</DeveloperStack>
          <SocialIcons>
            <Pressable onPress={() => Linking.openURL('whatsapp://send?phone=5541900000000&text=Olá...')}>
              <WhatsappSvg style={{ margin: 12 }} />
            </Pressable>
            <Pressable onPress={() => Linking.openURL('https://github.com/alexmiguel95/find-dev-app')}>
              <GithubSvg style={{ margin: 12 }} />
            </Pressable>
            <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/alexmiguel95/')}>
              <LinkdinSvg style={{ margin: 12 }} />
            </Pressable>
          </SocialIcons>
        </View>
      )}
    </Container>
  );
}

export default Profile;