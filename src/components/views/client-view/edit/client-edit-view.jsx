// * import tools
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// * import view
import { ClientAddView } from "@components/views";
// * import store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { getByIdUser } from "@redux/slices/client/client-redux-action";
export const ClientEditView = () => {
    const data = useAppSelector((stata) => stata?.client);
    const { id } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) {
            dispatch(getByIdUser(id));
        }
    }, [dispatch, id]);

    return (
        <ClientAddView
            clientInfo={data?.data}
            loading={data?.loading}
            id={id}
            editMode
        />
    );
};