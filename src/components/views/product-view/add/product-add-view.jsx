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
    SelectOption,
    Tooltip,
} from "@components/common/partials";

export const ProductAddView = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handlerGoBack = () => {
        navigate("/product");
    };
    return (
        <GS.FlexGap10>
            <GS.SubmitForm>
                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"text"}
                            label={t("name product")}
                        />
                    </GS.FormControlInput>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"text"}
                            label={t("code product")}
                        />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>

                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"number"}
                            label={t("operation")}
                        />
                    </GS.FormControlInput>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"number"}
                            label={t("price")}
                        />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>

                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <SelectOption />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>
            </GS.SubmitForm>
            <GS.ActionForm>
                <Tooltip title={t("save")}>
                    <SubmitButton>{t("save")} </SubmitButton>
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
