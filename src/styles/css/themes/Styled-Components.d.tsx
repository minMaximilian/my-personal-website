import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColour: string
    secondaryColour: string
    tertiaryColour: string

    primaryMono: string
    secondaryMono: string
    tertiaryMono: string

    textColour: string
  }
};