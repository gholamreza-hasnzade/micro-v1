import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { notificationTypes } from "@constants/content";
import { notification as notificationAction } from "@redux/slices/notification/notification-redux-slice";

export const ToastNotificationComponent = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const notification = useAppSelector((state) => state?.notification);

    const { showNotification, type, content } = notification;
    useEffect(() => {
        if (showNotification) {
            dispatch(
                notificationAction({
                    showNotification: false,
                    type: notificationTypes.success,
                    content: "",
                })
            );
        }
    }, [showNotification]);

    if (showNotification) {
        switch (type) {
            case notificationTypes.success:
                return toast.success(
                    <div className="toastify-header">
                        <div className="title-wrapper">
                            <h6 className="toast-title">{t(content)}</h6>
                        </div>
                    </div>,
                    { icon: false, hideProgressBar: true }
                );

            case notificationTypes.error:
                return toast.error(
                    <div className="toastify-header">
                        <div className="title-wrapper">
                            <h6 className="toast-title">{t(content)}</h6>
                        </div>
                    </div>,
                    { icon: false, hideProgressBar: true }
                );

            case notificationTypes.warning:
                return toast.error(
                    <div className="toastify-header">
                        <div className="title-wrapper">
                            <h6 className="toast-title">{t(content)}</h6>
                        </div>
                    </div>,
                    { icon: false, hideProgressBar: true }
                );
            default:
                break;
        }
    } else return null;
};
