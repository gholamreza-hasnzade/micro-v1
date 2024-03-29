// * Import tools
import React, { useState } from "react";
import * as I from "react-feather";
// * Import Style
import { MainSettingComponentStyle as S } from "@components/common/sections/setting/main-setting/main-setting-component.style";

import { Language } from "@components/common/segment";
export const MainSettingComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    return (
        <S.Container>
            <S.WapperAction
                onPointerMove={(e) => {
                    setPosition({
                        x: e.clientX,
                        y: e.clientY,
                    });
                }}
            >
                <S.Action
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ bottom: position.x, top: position.y }}
                >
                  {isOpen ? <I.ArrowLeft />: <I.ArrowRight /> }  
                </S.Action>
            </S.WapperAction>
            <S.Box isopen={isOpen}>
                <Language />
            </S.Box>
        </S.Container>
    );
};
