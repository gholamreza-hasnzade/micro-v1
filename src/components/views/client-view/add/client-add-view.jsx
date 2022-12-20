// * import tools
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik, Field } from "formik";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import {
    SubmitButton,
    OutlineButton,
    TextFildOutlinedInput,
    Tooltip,
} from "@components/common/partials";
import {
    callApi,
    endpoints,
} from "@components/config/app-configurations/callApi";
import { requestMethodes } from "@constants/content";

export const ClientAddView = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        phone: "",
    });
    const handleClientChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const { first_name, last_name, email, address, phone } = form;

    const clientValidation = Yup.object({
        first_name: Yup.string()
            .trim()
            .required(t("required field"))
            .min(3, t("must be at least 3 characters"))
            .max(64, t("must not be greater than 64 characters")),
        last_name: Yup.string()
            .trim()
            .required(t("required field"))
            .min(3, t("must be at least 3 characters")),
        email: Yup.string().trim().required(t("required field")),
        address: Yup.string()
            .trim()
            .required(t("required field"))
            .min(3, t("must be at least 3 characters"))
            .max(10, t("must not be greater than 120 characters")),
        phone: Yup.string().trim().required(t("required field")),
        /* .min(11, t("must be at least 11 characters")) */
        // .max(11, t("must not be greater than 11 characters")),
    });
    const handlerGoBack = () => {
        navigate("/client");
    };
    const handleSubmit = async (e) => {
        try {
            const { baseURL9000, v1 } = endpoints;
            const bodyForm = {
                first_name: e.first_name,
                last_name: e.last_name,
                email: e.email,
                address: e.address,
                phone: "09369880985",
                password: "123456",
                password_confirmation: "123456",
            };
            const result = await callApi({
                baseURL: baseURL9000,
                url: `${v1}/user`,
                method: requestMethodes.post,
                body: bodyForm,
            });
            if (result?.status) {
                navigate("/client");
            }
            console.log(result);
        } catch (error) {}
    };
    return (
        <GS.FlexGap10>
            <Formik
                enableReinitialize
                initialValues={{
                    first_name,
                    last_name,
                    email,
                    address,
                    phone,
                }}
                validationSchema={clientValidation}
                onSubmit={(e) => handleSubmit(e)}
            >
                {(formik) => (
                    <GS.SubmitForm id="myform">
                        <GS.FlexBoxCenter>
                            <GS.FormControlInput>
                                <TextFildOutlinedInput
                                    type={"text"}
                                    name="first_name"
                                    label={t("name client")}
                                    onChange={handleClientChange}
                                />
                            </GS.FormControlInput>
                            <GS.FormControlInput>
                                <TextFildOutlinedInput
                                    type={"text"}
                                    name="last_name"
                                    label={t("family name client")}
                                    onChange={handleClientChange}
                                />
                            </GS.FormControlInput>
                        </GS.FlexBoxCenter>

                        <GS.FlexBoxCenter>
                            <GS.FormControlInput>
                                <TextFildOutlinedInput
                                    type={"number"}
                                    name="phone"
                                    label={t("phone")}
                                    onChange={handleClientChange}
                                />
                            </GS.FormControlInput>
                            <GS.FormControlInput>
                                <TextFildOutlinedInput
                                    type={"email"}
                                    name="email"
                                    label={t("email")}
                                    onChange={handleClientChange}
                                />
                            </GS.FormControlInput>
                        </GS.FlexBoxCenter>

                        <GS.FlexBoxCenter>
                            <GS.FormControlInput>
                                <TextFildOutlinedInput
                                    type={"text"}
                                    name="address"
                                    label={t("addres")}
                                    onChange={handleClientChange}
                                    multiline
                                />
                            </GS.FormControlInput>
                        </GS.FlexBoxCenter>
                    </GS.SubmitForm>
                )}
            </Formik>

            <GS.ActionForm>
                <Tooltip title={t("save")}>
                    <SubmitButton form="myform" type="submit">
                        {t("save")}
                    </SubmitButton>
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
