import 'react-native-gesture-handler';
import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//     dark: true,
//     colors: {
//         // ...DarkTheme.colors,
//         // primary: 'string',
//         // background: '#111111',
//         // card: 'string',
//         // text: 'string',
//         // border: 'string',
//         // notification: 'string',
//     },
// };

export const App = () => {
  return (
    <AppState>
        <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {

    return (
        <ThemeProvider>
            { children }
        </ThemeProvider>
    );
};

export default App;
