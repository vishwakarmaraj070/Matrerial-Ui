import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { NavLink } from "react-router-dom";

const useStyele = makeStyles({
    fixedBottom: {
        position: "fixed",
        bottom: "0",
        left: 90,
        right: 20
    },
    activeNav: {
        backgroundColor: "#e34"
    }
});

export default function BottomNav(props) {
    const classes = useStyele();
    const [value, setValue] = React.useState(0);
    const navData = props.navData;
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.fixedBottom}
        >
            {navData.map((nav, index) => (
                <NavLink
                    key={index}
                    activeClassName={classes.activeNav}
                    to={`${props.match.path}/${nav.value}`}
                    onClick={e =>
                        props.handleShow(e, `${props.match.path}/${nav.value}`)
                    }
                >
                    <BottomNavigationAction
                        label={nav.value}
                        style={{ textTransform: "capitalize" }}
                        icon={nav.icon}
                        showLabel
                    />
                </NavLink>
            ))}
        </BottomNavigation>
    );
}
