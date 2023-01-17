import { Theme } from '@react-navigation/native';

type ThemeActions = { type: 'set_light_theme' } | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const LightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'black',
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    },
};

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'white',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'white',
        notification: 'teal',
    },
};

export const themeReducer = (state: ThemeState, action: ThemeActions): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return {currentTheme: 'light',
            dark: false,
            dividerColor: 'black',
            colors: {
                primary: '#084F6A',
                background: 'white',
                card: 'white',
                text: 'black',
                border: 'black',
                notification: 'teal',
            } };
        case 'set_dark_theme':
            return { currentTheme: 'dark',
            dark: true,
            dividerColor: 'white',
            colors: {
                primary: '#75CEDB',
                background: 'black',
                card: 'black',
                text: 'white',
                border: 'white',
                notification: 'teal',
            } };
        default:
        return state;
    }
};
