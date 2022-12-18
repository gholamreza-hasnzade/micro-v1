// * import tools
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import {
    SubmitButton,
    OutlineButton,
    TextFildOutlinedInput,
    Tooltip,
} from "@components/common/partials";

export const ClientAddView = () => {
    const { t } = useTranslation();
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
                            label={t("name user")}
                        />
                    </GS.FormControlInput>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"text"}
                            label={t("family name user")}
                        />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>

                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"number"}
                            label={t("mobile number")}
                        />
                    </GS.FormControlInput>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"email"}
                            label={t("email")}
                        />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>

                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"text"}
                            label={t("addres")}
                            multiline
                        />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>
            </GS.SubmitForm>
            <GS.ActionForm>
                <Tooltip title={t("save")}>
                    <SubmitButton>{t("save")}</SubmitButton>
                </Tooltip>
                <Tooltip title={t("cansel")} placement="bottom">
                    <OutlineButton onClick={handlerGoBack}>
                        {t("cansel")}
                    </OutlineButton>
                </Tooltip>
            </GS.ActionForm>
        </GS.FlexGap10>
    );
};
