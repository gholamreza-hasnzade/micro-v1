// * Import Casual modules
import React from 'react';

// * Import Tools
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

// * Import Configs
import { MATERIAL_UI_THEME_CONFIG } from '@components/config/app-configurations/material-ui/material-ui.config.theme';



export const MaterialUIConfig = ({ children }) => {
    return (
        <MUIThemeProvider theme={MATERIAL_UI_THEME_CONFIG}>
            {children}
        </MUIThemeProvider>
    );
};
