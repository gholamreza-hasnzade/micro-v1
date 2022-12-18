import { Tooltip } from "@mui/material";
import React from "react";

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
