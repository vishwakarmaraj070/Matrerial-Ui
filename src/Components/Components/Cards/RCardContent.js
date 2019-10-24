import React from "react";
import { styled, Box } from "@material-ui/core";
import { cardTheme } from "./RCard";
import { BoxSystem } from "../../BoxSystem";

const RCardContent = props => {
    // style
    const primary = cardTheme.palette.primary;

    const CardCont = styled(({ ...props }) => <Box {...props} />)(
        BoxSystem,
        {}
    );

    return (
        <React.Fragment>
            <CardCont {...props} p={2}>
                {props.children}
            </CardCont>
        </React.Fragment>
    );
};

export default styled(RCardContent)(BoxSystem);
