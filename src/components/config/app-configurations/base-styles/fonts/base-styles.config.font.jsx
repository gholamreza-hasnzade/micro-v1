// * Import Casual modules
import React  from 'react';

// * Import Tools
import { Global } from '@emotion/react';

// * Import Fonts
import { IranSansConfigFonts } from '@components/config/app-configurations/base-styles/fonts/iran-sans.config.font';
import { IranSansFaNumConfigFonts } from '@components/config/app-configurations/base-styles/fonts/iran-sans-fa-num.config.font';


export const BaseStylesConfigFonts= () => {
    return (
        <>
            <Global styles={IranSansConfigFonts} />
            <Global styles={IranSansFaNumConfigFonts} />
        </>
    )
};
