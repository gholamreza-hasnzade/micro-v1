// * Import tools
import React from "react";
import * as I from "react-feather";
// * Import style
import { EmptyComponentStyle as S } from "@components/common/partials/emptys/empty-component.style";

import { LinkButton } from "@components/common/partials";
export const EmptyComponent = ({ title, href, caption }) => {
    return (
        <S.ContainerEmpty>
            {title && (
                <S.ButtonWrapper>
                    <LinkButton href={href}>{title}</LinkButton>
                </S.ButtonWrapper>
            )}

            <S.BgWrapper>
                <I.Package />
                <S.Typography>{caption}</S.Typography>
            </S.BgWrapper>
        </S.ContainerEmpty>
    );
};
