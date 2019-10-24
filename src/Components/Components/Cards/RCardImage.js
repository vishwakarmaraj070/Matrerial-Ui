import React from "react";
import { CardMedia, Box } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { BoxSystem } from "../../BoxSystem";

const CardImage = styled(({ ...props }) => <CardMedia {...props} />)(BoxSystem);

const RCardImage = props => {
    // image style
    const MyImage = styled(({ ...props }) => <Box {...props} />)({
        transition: "0.16s",
        overflow: "hidden",
        transform: "scaleY(1.05)",
        "&:hover": {
            transform: () =>
                props.hover === "zoom-in"
                    ? "scale(1.2)"
                    : props.hover === "zoom-out"
                    ? "scale(0.9)"
                    : props.hover === "zoom-in-rotate"
                    ? "scale(1.4) rotateZ(5deg)"
                    : "",
            transformOrigin: "center"
        }
    });
    return (
        <React.Fragment>
            <CardImage
                style={{
                    overflow: props.hover ? "hidden" : "inherit"
                }}
                {...props}
                component="div"
                className="card-img-box"
            >
                <MyImage
                    component="img"
                    src={props.src}
                    alt="card img"
                    style={{ width: "100%" }}
                />
            </CardImage>
        </React.Fragment>
    );
};

export default styled(RCardImage)(BoxSystem);
