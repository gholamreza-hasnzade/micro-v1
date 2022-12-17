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
    SelectOption
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
                <SubmitButton>ثبت </SubmitButton>
                <OutlineButton onClick={handlerGoBack}>لغو</OutlineButton>
            </GS.ActionForm>
        </GS.FlexGap10>
    );
};
