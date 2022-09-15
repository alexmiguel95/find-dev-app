import DeveloperList from '../DeveloperList';
import { render } from '@testing-library/react-native';

describe('src/components/EnviaLance', () => {
    it('deve enviar o lance quando o botão for pressionado', async () => {
        const { getByText } = render(<DeveloperList />);

        expect(getByText("Alex")).toBeTruthy();
    });
});
