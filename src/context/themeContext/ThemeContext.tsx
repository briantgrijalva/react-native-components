import React, { createContext, useEffect, useReducer } from 'react';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { LightTheme, themeReducer, ThemeState, darkTheme } from './ThemeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {

    const colorScheme = useColorScheme();

    // useEffect(() => {
    //   colorScheme === 'light' ? setLightTheme() : setDarkTheme();
    // }, [colorScheme]);
    useEffect(() => {
        AppState.addEventListener( 'change', ( status ) => {
            if ( status === 'active' ) {
                Appearance.getColorScheme() === 'light' ? setLightTheme() : setDarkTheme();
            }
        });
    }, []);

    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark') ? darkTheme : LightTheme );
    // const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : LightTheme );

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'});
        console.log('setting dark theme');
    };

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'});
        console.log('setting light theme');
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    );
};
