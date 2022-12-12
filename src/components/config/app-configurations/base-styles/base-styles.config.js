// * Import Casual modules
import React from 'react';


// * Import Tools
import { Global } from '@emotion/react';



// * Import Base configs
import { BaseStylesConfigReset } from '@components/config/app-configurations/base-styles/base-styles.config.reset';
import { BaseStylesConfigCustomize } from '@components/config/app-configurations/base-styles/base-styles.config.customize';
import { BaseStylesConfigFonts } from './fonts/base-styles.config.font';



export const BaseStylesConfig = () => {
    return (
        <>
            <Global styles={BaseStylesConfigCustomize} />
            <Global styles={BaseStylesConfigReset} />
            <BaseStylesConfigFonts />
        </>
    );
};
