// * Import tools
import React, { useState } from "react";

// * Import Style
import { MainSettingComponentStyle as S } from "@components/common/sections/setting/main-setting/main-setting-component.style";
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
                ></S.Action>
            </S.WapperAction>
            <S.Box isopen={isOpen}>
                sdsdfsdfsdf
            </S.Box>
        </S.Container>
    );
};
