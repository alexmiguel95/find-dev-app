import { useEffect, useState } from 'react';
import {
  View,
  Text,
} from 'react-native';

import developerService from '../../service/developer.service';

import {
  Container,
} from './style';

const Profile = ({ route }) => {
  
  useEffect(() => {

    const fetchDeveloperData = async () => {
      const stack = await  developerService.getStack(1);
      const state = await  developerService.getState(1);

      console.log(stack, state);
      
    }
  
    fetchDeveloperData()
      .catch(console.error);
  }, [])

  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
}

export default Profile;