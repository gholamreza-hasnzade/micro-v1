// * import tools
import React from "react";

// *import style
import { OverlayMainComponentStyle as S } from "@components/common/partials/overlays/main-overlay/overlay-main-component.style";

export const MainOverlayComponent = ({onClick , isOpenDrawer}) => {
    return <S.Overlay isOpenDrawer={isOpenDrawer} onClick={onClick}></S.Overlay>;
};
