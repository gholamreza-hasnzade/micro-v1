// * import tools
import React from "react";
import Tooltip from "@mui/material/Tooltip";

export const TooltipComponent = ({ children, title, placement, ref }) => {
    console.log(ref);
    return (
        <Tooltip title={title} placement={placement}>
            {children}
        </Tooltip>
    );
};
