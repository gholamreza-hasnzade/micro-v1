// * import tools
import React from "react";

// * import components
import { LinkButton } from "@components/common/partials/buttons";

// * import style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
export const ClientView = () => {
    return (
        <S.Client>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterEnd>
                    <LinkButton href={"/client/add"}>کاربر جدید</LinkButton>
                </GS.FlexCenterEnd>
                <div>1</div>
            </GS.FlexBoxDirColumn>
        </S.Client>
    );
};
