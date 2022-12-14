// * import tools
import React from "react";
import { useNavigate } from "react-router-dom";
// * import style
import { ClientViewStyle as S } from "@components/views/client-view/client-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
import {
    SubmitButton,
    OutlineButton,
} from "@components/common/partials/buttons";
import { TextFildOutlinedInput } from "@components/common/partials/inputs";

export const ClientAddView = () => {
    const navigate = useNavigate();

    const handlerGoBack = () => {
        navigate("/client");
    };
    return (
        <GS.FlexGap10>
            <GS.SubmitForm component={"form"}>
                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"text"}
                            label={"نام کاربر"}
                        />
                    </GS.FormControlInput>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"text"}
                            label={"نام خانوادگی"}
                        />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>

                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"number"}
                            label={"شماره موبایل "}
                        />
                    </GS.FormControlInput>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"email"}
                            label={" ایمیل"}
                        />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>

                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"text"}
                            label={" آدرس"}
                            multiline
                        />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>
            </GS.SubmitForm>
            <GS.ActionForm>
                <SubmitButton>ثبت کاربر جدید </SubmitButton>
                <OutlineButton onClick={handlerGoBack}>لغو</OutlineButton>
            </GS.ActionForm>
        </GS.FlexGap10>
    );
};
