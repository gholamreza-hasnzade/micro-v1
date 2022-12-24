// * import tools
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik } from "formik";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import {
    SubmitButton,
    OutlineButton,
    TextFildOutlinedInput,
    Tooltip,
    Skeleton,
} from "@components/common/partials";
import {
    callApi,
    endpoints,
} from "@components/config/app-configurations/callApi";

// * import constants
import { notificationTypes, requestMethodes } from "@constants/content";
import { notification } from "@redux/slices/notification/notification-redux-slice";
import { useAppDispatch } from "@redux/base/hook-redux";

export const ClientAddView = ({ id, clientInfo, editMode, loading }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        phone: "",
        formErrors: {},
    });
    const handleClientChange = (e) => {
        const { name, value } = e.target;
        delete formErrors[name];
        setForm({ ...form, [name]: value });
    };
    const { first_name, last_name, email, address, phone, formErrors } = form;

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
            .max(120, t("must not be greater than 120 characters")),
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
                phone: e.phone,
                password: "123456",
                password_confirmation: "123456",
            };
            if (editMode) {
                const result = await callApi({
                    baseURL: baseURL9000,
                    url: `${v1}/user/${id}`,
                    method: requestMethodes.put,
                    body: bodyForm,
                });
                if (result?.status) {
                    navigate("/client");
                } else {
                    setForm((prevState) => ({
                        ...prevState,
                        formErrors: {
                            ...prevState.formErrors,
                            ...result?.errors,
                        },
                    }));
                }
            } else {
                const result = await callApi({
                    baseURL: baseURL9000,
                    url: `${v1}/user`,
                    method: requestMethodes.post,
                    body: bodyForm,
                });
                if (result?.status === true) {
                    navigate("/client");
                    dispatch(
                        notification({
                            showNotification: true,
                            type: notificationTypes.success,
                            content: "Added Successfully",
                        })
                    );
                } else {
                    setForm((prevState) => ({
                        ...prevState,
                        formErrors: {
                            ...prevState.formErrors,
                            ...result?.errors,
                        },
                    }));
                }
            }
        } catch (error) {}
    };
    // ** set data by id

    useEffect(() => {
        if (editMode && clientInfo) {
            setForm((prevState) => ({
                ...prevState,
                ...clientInfo,
            }));
        }
    }, [editMode, clientInfo]);
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
                                {loading ? (
                                    <Skeleton width={"100%"} height="80px" />
                                ) : (
                                    <TextFildOutlinedInput
                                        type={"text"}
                                        name={"first_name"}
                                        // error={formErrors?.first_name[0]}
                                        label={t("name client")}
                                        onChange={handleClientChange}
                                    />
                                )}
                            </GS.FormControlInput>
                            <GS.FormControlInput>
                                {loading ? (
                                    <Skeleton width={"100%"} height="80px" />
                                ) : (
                                    <TextFildOutlinedInput
                                        type={"text"}
                                        name={"last_name"}
                                        // error={formErrors?.last_name[0]}
                                        label={t("family name client")}
                                        onChange={handleClientChange}
                                    />
                                )}
                            </GS.FormControlInput>
                        </GS.FlexBoxCenter>

                        <GS.FlexBoxCenter>
                            <GS.FormControlInput>
                                {loading ? (
                                    <Skeleton width={"100%"} height="80px" />
                                ) : (
                                    <TextFildOutlinedInput
                                        type={"text"}
                                        name={"phone"}
                                        // error={formErrors?.phone[0]}
                                        label={t("phone")}
                                        onChange={handleClientChange}
                                    />
                                )}
                            </GS.FormControlInput>
                            <GS.FormControlInput>
                                {loading ? (
                                    <Skeleton width={"100%"} height="80px" />
                                ) : (
                                    <TextFildOutlinedInput
                                        type={"email"}
                                        //  error={formErrors?.email[0]}
                                        name={"email"}
                                        label={t("email")}
                                        onChange={handleClientChange}
                                    />
                                )}
                            </GS.FormControlInput>
                        </GS.FlexBoxCenter>

                        <GS.FlexBoxCenter>
                            <GS.FormControlInput>
                                {loading ? (
                                    <Skeleton width={"100%"} height="80px" />
                                ) : (
                                    <TextFildOutlinedInput
                                        type={"text"}
                                        name={"address"}
                                        //error={formErrors?.address[0]}
                                        label={t("addres")}
                                        onChange={handleClientChange}
                                        multiline
                                    />
                                )}
                            </GS.FormControlInput>
                        </GS.FlexBoxCenter>
                    </GS.SubmitForm>
                )}
            </Formik>

            <GS.ActionForm>
                <Tooltip title={t("save")}>
                    {loading ? (
                        <Skeleton width={"100%"} height="100px" />
                    ) : (
                        <SubmitButton form="myform" type="submit">
                            {editMode ? t("edit") : t("save")}
                        </SubmitButton>
                    )}
                </Tooltip>
                <Tooltip title={t("cansel")} placement="bottom">
                    {loading ? (
                        <Skeleton width={"100%"} height="100px" />
                    ) : (
                        <OutlineButton onClick={handlerGoBack}>
                            {t("cansel")}
                        </OutlineButton>
                    )}
                </Tooltip>
            </GS.ActionForm>
        </GS.FlexGap10>
    );
};
