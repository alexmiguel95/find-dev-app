import 'styled-components';
import defaultTheme from '../theme/defaultTheme';

declare module 'styled-components' {
    type ThemeType = typeof defaultTheme;

    export interface DefaultTheme extends ThemeType {}
}
