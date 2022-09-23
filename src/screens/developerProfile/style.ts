import styled from 'styled-components/native';
import defaultTheme from '../../theme/defaultTheme';

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${defaultTheme.colors.primary};
`;

const DeveloperPhoto = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  border: ${({ theme }) => `4px solid ${theme.colors.secondary}`};
`;

const DeveloperName = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 16px;
`;

const DeveloperDescription = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const DeveloperStack = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const SocialIcons = styled.View`
  flex-direction: row;
  margin-top: 16px;
  background-color: ${defaultTheme.colors.background};
  padding: 0px 20px;
  border-radius: 4px;
`;

const DeveloperLocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

const DeveloperLocation = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export {
  Container,
  DeveloperPhoto,
  DeveloperName,
  DeveloperDescription,
  DeveloperStack,
  SocialIcons,
  DeveloperLocationContainer,
  DeveloperLocation,
};
