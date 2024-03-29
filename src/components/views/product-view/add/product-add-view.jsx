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
    SelectOption,
    Tooltip,
    Skeleton,
} from "@components/common/partials";
// * Import Store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { getUsers } from "@redux/slices/client/client-redux-action";

// * import  config
import {
    callApi,
    endpoints,
} from "@components/config/app-configurations/callApi";

// * import constants
import { notificationTypes, requestMethodes } from "@constants/content";

// * Import Store
import { toastContainer } from "@helpers";

export const ProductAddView = ({ id, productInfo, editMode, loading }) => {
    const datas = useAppSelector((stata) => stata?.client);
    const dispatch = useAppDispatch();

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        user_id: "",
        name: "",
        code: "",
        price: "",
        total: "",
        formErrors: {},
    });
    const { user_id, name, code, price, total, formErrors } = form;

    const productValidation = Yup.object({
        name: Yup.string()
            .trim()
            .required(t("required field"))
            .min(3, t("must be at least 3 characters"))
            .max(64, t("must not be greater than 64 characters")),
        code: Yup.string()
            .trim()
            .required(t("required field"))
            .max(120, t("must not be greater than 120 characters")),
        price: Yup.string()
            .required(t("required field"))
            .max(4, t("must not be greater than 4 characters")),
        total: Yup.string()
            .required(t("required field"))
            .max(4, t("must not be greater than 4 characters")),
        user_id: Yup.string().required(t("required field")),
    });
    const handleProductChange = (e) => {
        const { name, value } = e.target;
        delete formErrors[name];
        setForm({ ...form, [name]: value });
    };
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handlerGoBack = () => {
        navigate("/product");
    };
    const handleSubmit = async (e) => {
        try {
            const { baseURL9000, v1 } = endpoints;
            const bodyForm = {
                user_id: e.user_id,
                name: e.name,
                code: Number(e.code),
                price: Number(e.price),
                total: Number(e.total),
            };
            if (editMode) {
                const result = await callApi({
                    baseURL: baseURL9000,
                    url: `${v1}/product/${id}`,
                    method: requestMethodes.put,
                    body: bodyForm,
                });

                if (result?.status) {
                    navigate("/product");
                    toastContainer(
                        notificationTypes.info,
                        t("Edited Successfully")
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
            } else {
                const result = await callApi({
                    baseURL: baseURL9000,
                    url: `${v1}/product`,
                    method: requestMethodes.post,
                    body: bodyForm,
                });

                if (result?.status) {
                    navigate("/product");
                    toastContainer(
                        notificationTypes.success,
                        t("Added Successfully")
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
        if (editMode && productInfo) {
            setForm((prevState) => ({
                ...prevState,
                ...productInfo,
            }));
        }
    }, [editMode, productInfo]);
    return (
        <GS.FlexGap10>
            <Formik
                enableReinitialize
                initialValues={{
                    name,
                    price,
                    total,
                    code,
                    user_id,
                }}
                validationSchema={productValidation}
                onSubmit={(e) => handleSubmit(e)}
            >
                {(formik) => (
                    <GS.SubmitForm id="myProductForm">
                        <GS.FlexBoxCenter>
                            <GS.FormControlInput>
                                {loading ? (
                                    <Skeleton width={"100%"} height="80px" />
                                ) : (
                                    <TextFildOutlinedInput
                                        type={"text"}
                                        name={"name"}
                                        onChange={handleProductChange}
                                        label={t("name product")}
                                    />
                                )}
                            </GS.FormControlInput>
                            <GS.FormControlInput>
                                {loading ? (
                                    <Skeleton width={"100%"} height="80px" />
                                ) : (
                                    <TextFildOutlinedInput
                                        type={"text"}
                                        name={"code"}
                                        label={t("code product")}
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
                                        name={"total"}
                                        onChange={handleProductChange}
                                        label={t("total")}
                                    />
                                )}
                            </GS.FormControlInput>
                            <GS.FormControlInput>
                                {loading ? (
                                    <Skeleton width={"100%"} height="80px" />
                                ) : (
                                    <TextFildOutlinedInput
                                        type={"text"}
                                        name={"price"}
                                        label={t("price")}
                                    />
                                )}
                            </GS.FormControlInput>
                        </GS.FlexBoxCenter>

                        <GS.FlexBoxCenter>
                            <GS.FormControlInput>
                                {loading ? (
                                    <Skeleton width={"100%"} height="80px" />
                                ) : (
                                    <SelectOption
                                        label={t("client")}
                                        id={"client-id-1"}
                                        name="user_id"
                                    >
                                        {datas?.datas?.map((itm, index) => (
                                            <GS.MenuItem
                                                key={index}
                                                value={itm?.id}
                                            >
                                                {itm?.first_name}
                                            </GS.MenuItem>
                                        ))}
                                    </SelectOption>
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
                        <SubmitButton form="myProductForm">
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