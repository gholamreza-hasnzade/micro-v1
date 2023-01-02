// * Import tools
import React from "react";
import { Tooltip } from "@mui/material";

export const TooltipComponent = React.forwardRef(function MyComponent(
    props,
    ref
) {
    const { title, children, placement = "top" } = props;
    return (
        <Tooltip title={title} {...props} ref={ref} placement={placement} arrow>
            <div>{children}</div>
        </Tooltip>
    );
});
