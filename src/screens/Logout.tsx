import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { TypeRoute } from '../routes/Routes';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TypeNavigation = NativeStackNavigationProp<TypeRoute, 'Entrar'>;

const Logout = () => {
    const navigation = useNavigation<TypeNavigation>();

    const logout = async function signOut() {
        try {
            await Auth.signOut();
            navigation.navigate('Entrar');
        } catch (error) {
            console.log('error signing out: ', error);
        }
    };

    logout();

    return <></>;
};

export default Logout;
