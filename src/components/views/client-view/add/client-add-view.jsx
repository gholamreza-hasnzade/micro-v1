// * import tools
import React from "react";

// * import style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { SubmitButton } from "@components/common/partials/buttons";

export const ClientAddView = () => {
    return (
        <GS.FlexCenterGap>
            <GS.SubmitForm>1</GS.SubmitForm>
            <GS.ActionForm>
                <SubmitButton>ثبت کاربر جدید </SubmitButton>
            </GS.ActionForm>
        </GS.FlexCenterGap>
    );
};
