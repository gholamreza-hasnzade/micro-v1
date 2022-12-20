// * import tools
import React from "react";
import { useParams } from "react-router-dom";

// * import view
import { ClientAddView } from "@components/views";
export const ClientEditView = () => {
    const { id } = useParams();
    console.log(id);
    return <ClientAddView />;
};
