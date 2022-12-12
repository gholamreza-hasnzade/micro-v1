// * Import Casual modules
import React from "react";

// * Import Configs
import { MaterialUIConfig } from "@components/config/app-configurations/material-ui/material-ui.config";
import { BaseStylesConfig } from "@components/config/app-configurations/base-styles/base-styles.config";
import { EmotionConfig } from "@components/config/app-configurations/emotion/emotion.config";
import { ReduxConfig } from "./redux/redux.config";
import { RtlMaterail } from "./rtl-material/rtl-material";

export const AppConfigurations = ({ children }) => {
    return (
        <ReduxConfig>
            <BaseStylesConfig />
            <RtlMaterail>
                <MaterialUIConfig>
                    <EmotionConfig>{children}</EmotionConfig>
                </MaterialUIConfig>
            </RtlMaterail>
        </ReduxConfig>
    );
};
