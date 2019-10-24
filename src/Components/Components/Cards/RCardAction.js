import React from "react";
import { CardActions, styled } from "@material-ui/core";
import { BoxSystem } from "../../BoxSystem";

const CardAction = styled(({ ...props }) => <CardActions {...props} />)(
    BoxSystem,
    {}
);

const RCardAction = props => {
    return (
        <React.Fragment>
            <CardAction {...props}>{props.children}</CardAction>
        </React.Fragment>
    );
};

export default styled(RCardAction)(BoxSystem);
