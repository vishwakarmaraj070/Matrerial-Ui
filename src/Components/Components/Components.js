import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ButtonsContainer from "./Buttons/ButtonsContainer";
import { Box } from "@material-ui/core";
import BottomNav from "../BottomNav";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CardsContainer from "./Cards/CardsContainer";
import DropdownContainer from "./Dropdown.js/DropdownContainer";
import Jumbotron from "./Jumbotron/Jumbotron";
import { Fade } from "react-reveal";

const comps = [
    {
        value: "buttons",
        component: ButtonsContainer,
        icon: <RestoreIcon />
    },
    {
        value: "cards",
        component: CardsContainer,
        icon: <FavoriteIcon />
    },
    {
        value: "dropdown",
        component: DropdownContainer,
        icon: <LocationOnIcon />
    },
    {
        value: "jumbotron",
        component: Jumbotron,
        icon: <RestoreIcon />
    }
];

const navData = comps.map(nav => {
    return { value: nav.value, icon: nav.icon };
});

const Components = props => {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(false);
        setTimeout(() => setShow(true), 100);
    };

    return (
        <React.Fragment>
            <Box>
                <Switch>
                    <Fade bottom when={show}>
                        {comps.map((comp, index) => (
                            <Route
                                key={index}
                                path={`${props.match.path}/${comp.value}`}
                                component={comp.component}
                            />
                        ))}

                        <Route
                            path={`${props.match.path}/`}
                            render={() => (
                                <Redirect to={`${props.match.path}/buttons`} />
                            )}
                        />
                    </Fade>
                </Switch>
            </Box>
            <BottomNav
                handleShow={handleShow}
                navData={navData}
                match={props.match}
            />
        </React.Fragment>
    );
};

export default Components;
