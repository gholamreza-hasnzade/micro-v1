import React from 'react';

// * Import Tools 
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

// * Import Constants
import { THEME_LIGHT } from '@constants/theme';


export const EmotionConfig = ({ children }) => {
    return (
        <>
            <EmotionThemeProvider theme={THEME_LIGHT}>
                {children}
            </EmotionThemeProvider>
        </>

    );
};
