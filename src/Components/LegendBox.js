import React from "react";
import { makeStyles } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";
import { Box, Typography } from "@material-ui/core";

const useStyel = makeStyles({
    legend: {
        borderColor: blue[700]
    },
    label: {
        color: blue[700],
        textTransform: "capitalize"
    }
});

const LegendBox = props => {
    const classes = useStyel();
    return (
        <React.Fragment>
            <Box mb={2}>
                <fieldset className={classes.legend}>
                    <legend>
                        <Typography
                            className={classes.label}
                            variant="h5"
                            component="h2"
                        >
                            {props.title}
                        </Typography>
                    </legend>
                    {props.children}
                </fieldset>
            </Box>
        </React.Fragment>
    );
};

export default LegendBox;
