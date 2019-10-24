import React from "react";
import { styled, Typography } from "@material-ui/core";
import { BoxSystem } from "../../BoxSystem";

const RCardBody = props => {
    // styled
    const CardBody = styled(({ ...props }) => <Typography {...props} />)(
        BoxSystem,
        {}
    );

    return (
        <React.Fragment>
            <CardBody {...props}>{props.children}</CardBody>
        </React.Fragment>
    );
};

export default styled(RCardBody)(BoxSystem);
