import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { styled, Card, createMuiTheme, Box } from "@material-ui/core";
import { BoxSystem } from "../../BoxSystem";
// theme here
export let cardTheme;
const RCard = props => {
    // create theme
    cardTheme = createMuiTheme({
        palette: {
            primary: {
                main: props.color ? props.color : "#444"
            }
        }
    });
    console.log(cardTheme);
    // style
    const MyCard = styled(({ ...props }) => <Card {...props} />)(BoxSystem, {});

    // wider card
    const WiderCard = styled(({ ...props }) => <Box {...props} />)({
        width: "max-content",
        marginLeft: "2%",
        "& > div": {
            overflow: "inherit"
        },
        "& .card-img-box": {
            marginLeft: "-5%",
            width: "110%",
            borderRadius: ".25rem",
            boxShadow:
                " 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0 rgba(0, 0, 0, .15)"
        },
        "& span[class*='-focusHighlight-']": {
            zIndex: -11
        }
    });

    // narrower card
    const NarrowerCard = styled(({ ...props }) => <Box {...props} />)({
        width: "max-content",
        marginTop: "2.5%",
        "& > div": {
            overflow: "inherit"
        },
        "& .card-img-box": {
            marginLeft: "5%",
            marginTop: "-5%",
            width: "90%",
            zIndex: 99999,
            borderRadius: ".25rem",
            boxShadow:
                " 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0 rgba(0, 0, 0, .15)"
        },
        "& span[class*='-focusHighlight-']": {
            zIndex: -11
        }
    });

    return (
        <React.Fragment>
            <ThemeProvider theme={cardTheme}>
                {props.card === "wider" ? (
                    <WiderCard className="card-box">
                        <MyCard {...props}>{props.children}</MyCard>
                    </WiderCard>
                ) : props.card === "narrower" ? (
                    <NarrowerCard className="card-box">
                        <MyCard {...props}>{props.children}</MyCard>
                    </NarrowerCard>
                ) : (
                    <MyCard {...props}>{props.children}</MyCard>
                )}
            </ThemeProvider>
        </React.Fragment>
    );
};
export default styled(RCard)(BoxSystem);
