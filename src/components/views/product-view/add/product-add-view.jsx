// * import tools
import React from "react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    const handlerGoBack = () => {
        navigate("/product");
    };
    return (
        <GS.FlexGap10>
            <GS.SubmitForm component={"form"}>
                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"text"}
                            label={"نام محصول"}
                        />
                    </GS.FormControlInput>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"text"}
                            label={"کد محصول"}
                        />
                    </GS.FormControlInput>
                </GS.FlexBoxCenter>

                <GS.FlexBoxCenter>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"number"}
                            label={" تعداد "}
                        />
                    </GS.FormControlInput>
                    <GS.FormControlInput>
                        <TextFildOutlinedInput
                            type={"number"}
                            label={" قیمت "}
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
                <Tooltip title="ثبت">
                    <SubmitButton>ثبت </SubmitButton>
                </Tooltip>
                <Tooltip title="لغو" placement="bottom">
                    <OutlineButton onClick={handlerGoBack}>لغو</OutlineButton>
                </Tooltip>
            </GS.ActionForm>
        </GS.FlexGap10>
    );
};
