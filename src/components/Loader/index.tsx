import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

import defaultTheme from '../../theme/defaultTheme';

const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size={70} color={defaultTheme.colors.secondaryLight} />
    </Container>
  );
}

export default Loader;