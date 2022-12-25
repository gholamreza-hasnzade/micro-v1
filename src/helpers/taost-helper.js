import { toast } from "react-toastify";
import { notificationTypes } from "@constants/content";

export const toastContainer = (
    type,
    content,
    theme = "light",
    position = "top-right"
) => {
    switch (type) {
        case notificationTypes.success:
            return toast.success(content, {
                position: position,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: theme,
            });
        case notificationTypes.error:
            return toast.error(content, {
                position: position,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: theme,
            });
        case notificationTypes.info:
            return toast.info(content, {
                position: position,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: theme,
            });
        case notificationTypes.warning:
            return toast.warning(content, {
                position: position,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: theme,
            });
        default:
            break;
    }
};
