import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontColors: {
      primary: string;
      secondary: string;
    };
    backColors: {
      primary: string;
      secondary: string;
      save: string;
    };
    fontSizes: {
      text: string;
      title: string;
    };
  }
}
