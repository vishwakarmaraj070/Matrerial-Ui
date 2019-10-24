import React from "react";
import { styled, Typography, createMuiTheme } from "@material-ui/core";
import { BoxSystem } from "../../BoxSystem";
import { cardTheme } from "./RCard";
import { ThemeProvider } from "@material-ui/styles";

const RCardTitle = props => {
    // primary color
    const primary = cardTheme.palette.primary;
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: props.color ? props.color : primary.dark
            }
        }
    });

    const CardTitle = styled(({ ...props }) => <Typography {...props} />)(
        BoxSystem
    );
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CardTitle
                    {...props}
                    component={props.component ? props.component : "h1"}
                >
                    {props.children}
                </CardTitle>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default styled(RCardTitle)(BoxSystem);
