import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Linking, ListRenderItem, Pressable, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { IDeveloper, IStack } from '../models/developer';
import developerService from '../service/developer.service';
import WhatsappSvg from '../assets/icons/whatsapp.svg';
import GithubSvg from '../assets/icons/github.svg';
import LinkdinSvg from '../assets/icons/linkdin.svg';
import StarActiveSvg from '../assets/icons/star-active.svg';
import StarDisabledSvg from '../assets/icons/star-disabled.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const favoritesKey = '@finddev:favoriteslist';

const DeveloperList = ({ navigation }) => {
    const theme = useTheme();

    const [developerList, setDeveloperList] = useState<IDeveloper[]>([]);
    const [stacks, setStacks] = useState<IStack[]>([]);
    const [listFavoriteId, setListFavoriteId] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        developerService.getAllStacks().then(setStacks);
    }, []);

    useEffect(() => {
        if (stacks.length > 0) {
            developerService.getAllDeveloper().then(response => {
                response.map(developerData => (developerData.stack = stacks.filter(stack => stack.id === developerData.stack)[0].label));
                setDeveloperList(response);
                setIsLoading(false);
            });
        }
    }, [stacks]);

    useEffect(() => {
        const loadFavorites = async () => {
            const favorites = await AsyncStorage.getItem(favoritesKey);
            setListFavoriteId(JSON.parse(favorites) ?? []);
        };

        loadFavorites();
    }, []);

    const handleFavoriteDeveloper = async (idDeveloper: number) => {
        const findIndex = listFavoriteId.findIndex(id => id === idDeveloper);

        if (findIndex !== -1) {
            listFavoriteId.splice(findIndex, 1);
            setListFavoriteId([...listFavoriteId]);
        } else {
            setListFavoriteId([...listFavoriteId, idDeveloper]);
        }

        try {
            await AsyncStorage.setItem(favoritesKey, JSON.stringify(listFavoriteId));
        } catch (error) {
            console.error(error);
        }
    };

    const renderCard: ListRenderItem<IDeveloper> = ({ item }) => (
        <Pressable onPress={() => navigation.navigate("PERFIL", { item })}>
            <StyledCardContainer>
                <StyledDeveloperPhoto source={{ uri: `${item.photo}` }} />
                <StyledCardInnerContainer>
                    <StyledSocialIcons>
                        <Pressable onPress={() => Linking.openURL('whatsapp://send?phone=5541900000000&text=Olá...')}>
                            <WhatsappSvg style={{ marginRight: 8 }} />
                        </Pressable>
                        <Pressable onPress={() => Linking.openURL('https://github.com/alexmiguel95/find-dev-app')}>
                            <GithubSvg style={{ marginRight: 8 }} />
                        </Pressable>
                        <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/alexmiguel95/')}>
                            <LinkdinSvg />
                        </Pressable>
                    </StyledSocialIcons>
                    <View>
                        <StyledName>{item.name}</StyledName>
                        <StyledDescription>{item.description}</StyledDescription>
                        <StyledStack>{item.stack}</StyledStack>
                    </View>
                    <StyledFavoriteContainer>
                        <Pressable onPress={() => handleFavoriteDeveloper(item.id)}>
                            {listFavoriteId.includes(item.id) ? (
                                <StarActiveSvg style={{ marginLeft: 'auto' }} />
                            ) : (
                                <StarDisabledSvg style={{ marginLeft: 'auto' }} />
                            )}
                        </Pressable>
                    </StyledFavoriteContainer>
                </StyledCardInnerContainer>
            </StyledCardContainer>
        </Pressable>
    );

    return (
        <StyledContainer>
            {isLoading ? (
                <ActivityIndicator color={theme.colors.secondary} size="large" />
            ) : (
                <FlatList data={developerList} renderItem={renderCard} />
            )}
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    flex: 1;
    padding: 50px 0 26px 0;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledCardContainer = styled.View`
    flex-direction: row;

    height: 140px;
    width: 300px;
    margin: 0 auto 24px auto;
    padding: 15px;

    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 6px;
`;

const StyledCardInnerContainer = styled.View`
    flex: 1;
`;

const StyledDeveloperPhoto = styled.Image`
    height: 100px;
    width: 100px;
    margin: auto 18px auto 0;

    border-radius: 50px;
    border: ${({ theme }) => `4px solid ${theme.colors.secondary}`};
`;

const StyledSocialIcons = styled.View`
    flex-direction: row;
    margin-left: auto;
    margin-bottom: 16px;
`;

const StyledName = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    font-weight: 700;
`;

const StyledDescription = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 12px;
    font-weight: 700;
`;

const StyledStack = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    font-weight: 700;
`;

const StyledFavoriteContainer = styled.View`
    margin-top: -20px;
`;

export default DeveloperList;
