import React from "react";
import LegendBox from "../../LegendBox";
import { Typography, Box } from "@material-ui/core";
import RButton from "./RButtons";
import { blue, cyan, orange } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";

const color = [
    "#3e4",
    "#e34",
    blue[600],
    cyan[500],
    orange[800],
    cyan[900],
    orange[500]
];

const ButtonsContainer = () => {
    return (
        <React.Fragment>
            <Box mb={7}>
                {/* default button  */}
                <LegendBox title="Default buttons">
                    <Typography>
                        You can use custom button styles for actions in forms,
                        dialogs, and more with support for multiple sizes,
                        states, and more...
                    </Typography>
                    <Box mt={2} p="0.6rem" border={`2px solid #086296de`}>
                        {color.map((clr, index) => (
                            <RButton key={index} color={clr}>
                                button
                            </RButton>
                        ))}
                        {/* <RButton color="#3e4">button</RButton>
                        <RButton color="#e34">button</RButton>
                        <RButton color={blue[600]}>button</RButton>
                        <RButton color={cyan[500]}>button</RButton>
                        <RButton color={orange[800]}>button</RButton>
                        <RButton color={cyan[900]}>button</RButton>
                        <RButton color={orange[300]}>button</RButton> */}
                    </Box>
                </LegendBox>
                {/* contained button */}
                <LegendBox title="Contained buttons">
                    <Typography>
                        You can use custom button styles for actions in forms,
                        dialogs, and more with support for multiple sizes,
                        states, and more...
                    </Typography>
                    <Box mt={2} p="0.6rem" border={`2px solid #086296de`}>
                        {color.map((clr, index) => (
                            <RButton
                                key={index}
                                variant="contained"
                                color={clr}
                            >
                                button
                            </RButton>
                        ))}
                        {/* <RButton variant="contained" color="#3e4">
                            button
                        </RButton>
                        <RButton variant="contained" color="#e34">
                            button
                        </RButton>
                        <RButton variant="contained" color={blue[600]}>
                            button
                        </RButton>
                        <RButton variant="contained" color={cyan[500]}>
                            button
                        </RButton>
                        <RButton variant="contained" color={orange[800]}>
                            button
                        </RButton>
                        <RButton variant="contained" color={cyan[900]}>
                            button
                        </RButton> */}
                    </Box>
                </LegendBox>

                {/* text button */}
                <LegendBox title="Text buttons">
                    <Typography>
                        You can use custom button styles for actions in forms,
                        dialogs, and more with support for multiple sizes,
                        states, and more...
                    </Typography>
                    <Box mt={2} p="0.6rem" border={`2px solid #086296de`}>
                        {color.map((clr, index) => (
                            <RButton key={index} variant="text" color={clr}>
                                button
                            </RButton>
                        ))}
                        {/* <RButton variant="text" color="#3e4">
                            button
                        </RButton>
                        <RButton variant="text" color="#e34">
                            button
                        </RButton>
                        <RButton variant="text" color={blue[600]}>
                            button
                        </RButton>
                        <RButton variant="text" color={cyan[500]}>
                            button
                        </RButton>
                        <RButton variant="text" color={orange[800]}>
                            button
                        </RButton>
                        <RButton variant="text" color={cyan[900]}>
                            button
                        </RButton> */}
                    </Box>
                </LegendBox>

                {/* outlined button */}
                <LegendBox title="outlined buttons">
                    <Typography>
                        You can use custom button styles for actions in forms,
                        dialogs, and more with support for multiple sizes,
                        states, and more...
                    </Typography>
                    <Box mt={2} p="0.6rem" border={`2px solid #086296de`}>
                        {color.map((clr, index) => (
                            <RButton key={index} variant="outlined" color={clr}>
                                button
                            </RButton>
                        ))}
                        {/* <RButton variant="outlined" color="#3e4">
                            button
                        </RButton>
                        <RButton variant="outlined" color="#e34">
                            button
                        </RButton>
                        <RButton variant="outlined" color={blue[600]}>
                            button
                        </RButton>
                        <RButton variant="outlined" color={cyan[500]}>
                            button
                        </RButton>
                        <RButton variant="outlined" color={orange[800]}>
                            button
                        </RButton>
                        <RButton variant="outlined" color={cyan[900]}>
                            button
                        </RButton> */}
                    </Box>
                </LegendBox>

                {/* sm button */}
                <LegendBox title="Sm buttons">
                    <Typography>
                        You can use custom button styles for actions in forms,
                        dialogs, and more with support for multiple sizes,
                        states, and more...
                    </Typography>
                    <Box mt={2} p="0.6rem" border={`2px solid #086296de`}>
                        {color.map((clr, index) => (
                            <RButton
                                key={index}
                                sm
                                variant="contained"
                                color={clr}
                            >
                                button
                            </RButton>
                        ))}
                        {/* <RButton sm variant="contained" color="#3e4">
                            button
                        </RButton>
                        <RButton sm variant="contained" color="#e34">
                            button
                        </RButton>
                        <RButton sm variant="contained" color={blue[600]}>
                            button
                        </RButton>
                        <RButton sm variant="contained" color={cyan[500]}>
                            button
                        </RButton>
                        <RButton sm variant="contained" color={orange[800]}>
                            button
                        </RButton>
                        <RButton sm variant="contained" color={cyan[900]}>
                            button
                        </RButton> */}
                    </Box>
                </LegendBox>

                {/* lg button */}
                <LegendBox title="Lg buttons">
                    <Typography>
                        You can use custom button styles for actions in forms,
                        dialogs, and more with support for multiple sizes,
                        states, and more...
                    </Typography>
                    <Box mt={2} p="0.6rem" border={`2px solid #086296de`}>
                        {color.map((clr, index) => (
                            <RButton
                                key={index}
                                lg
                                variant="contained"
                                color={clr}
                            >
                                button
                            </RButton>
                        ))}
                        {/* <RButton sm variant="contained" color="#3e4">
                            button
                        </RButton>
                        <RButton sm variant="contained" color="#e34">
                            button
                        </RButton>
                        <RButton sm variant="contained" color={blue[600]}>
                            button
                        </RButton>
                        <RButton sm variant="contained" color={cyan[500]}>
                            button
                        </RButton>
                        <RButton sm variant="contained" color={orange[800]}>
                            button
                        </RButton>
                        <RButton sm variant="contained" color={cyan[900]}>
                            button
                        </RButton> */}
                    </Box>
                </LegendBox>

                {/* Rounded button */}
                <LegendBox title="Rounded buttons">
                    <Typography>
                        You can use custom button styles for actions in forms,
                        dialogs, and more with support for multiple sizes,
                        states, and more...
                    </Typography>
                    <Box mt={2} p="0.6rem" border={`2px solid #086296de`}>
                        <RButton variant="contained" rounded color="#3e4">
                            button
                        </RButton>
                        <RButton variant="contained" rounded color="#e34">
                            button
                        </RButton>
                        <RButton
                            variant="contained"
                            sm
                            rounded
                            color={blue[600]}
                        >
                            button
                        </RButton>
                        <RButton
                            variant="contained"
                            lg
                            rounded
                            color={cyan[500]}
                        >
                            button
                        </RButton>
                        <RButton variant="outlined" rounded color={orange[800]}>
                            button
                        </RButton>
                        <RButton variant="rounded" rounded color={cyan[700]}>
                            buttons
                        </RButton>
                        <RButton variant="text" rounded color={orange[800]}>
                            button
                        </RButton>
                        <RButton variant="text" rounded color={cyan[700]}>
                            buttons
                        </RButton>
                    </Box>
                </LegendBox>

                {/* button with icon */}
                <LegendBox title="buttons with icon">
                    <Typography>
                        You can use custom button styles for actions in forms,
                        dialogs, and more with support for multiple sizes,
                        states, and more...
                    </Typography>
                    <Box mt={2} p="0.6rem" border={`2px solid #086296de`}>
                        {color.map((clr, index) =>
                            index <= 3 ? (
                                <RButton
                                    key={index}
                                    variant="contained"
                                    startIcon={<DeleteIcon />}
                                    color={clr}
                                >
                                    button
                                </RButton>
                            ) : (
                                <RButton
                                    key={index}
                                    variant="contained"
                                    endIcon={<DeleteIcon />}
                                    color={clr}
                                >
                                    button
                                </RButton>
                            )
                        )}

                        {/* <RButton variant="contained" color="#e34">
                            button
                        </RButton>
                        <RButton variant="contained" sm color={blue[600]}>
                            button
                        </RButton>
                        <RButton variant="contained" lg color={cyan[500]}>
                            button
                        </RButton>
                        <RButton variant="outlined" rounded color={orange[800]}>
                            button
                        </RButton>
                        <RButton variant="rounded" rounded color={cyan[700]}>
                            buttons
                        </RButton> */}
                    </Box>
                </LegendBox>
            </Box>
        </React.Fragment>
    );
};

export default ButtonsContainer;
