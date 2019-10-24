import React from "react";
import { Box, Typography, CardActionArea } from "@material-ui/core";
import LegendBox from "../../LegendBox";
import RCard from "./RCard";
import RCardBody from "./RCardBody";
import RCardImage from "./RCardImage";
import RCardTitle from "./RCardTitle";
import RButton from "../Buttons/RButtons";
import RCardAction from "./RCardAction";
import RCardContent from "./RCardContent";
import TestCard from "./TestCard";

const images = [
    "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(145).jpg",
    "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg",
    "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg",
    "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg",
    "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg",
    "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg",
    "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
    "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg",
    "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg"
];
const CardsContainer = () => {
    return (
        <React.Fragment>
            <Box mb={7}>
                {/* basic card  */}
                <LegendBox title="basic card">
                    <Typography>
                        Cards provide you with clarity, clean content
                        categorization and an attractive way of presenting it to
                        your users.
                    </Typography>
                    <Box
                        mt={2}
                        p="0.6rem"
                        border={`2px solid #086296de`}
                        display="flex"
                        flexWrap="wrap"
                    >
                        {images.map((img, index) => (
                            <Box m="1rem" key={index}>
                                <RCard width="300px" color="red">
                                    <CardActionArea>
                                        <RCardImage src={img} />
                                        <RCardContent>
                                            <RCardTitle mt="0px" component="h1">
                                                Tilte
                                            </RCardTitle>
                                            <RCardBody>
                                                Cards provide you with clarity,
                                                clean content categorization and
                                                an attractive way of presenting
                                                it to your users.
                                            </RCardBody>
                                        </RCardContent>
                                    </CardActionArea>
                                    <RCardAction>
                                        <RButton variant="text">Share</RButton>
                                    </RCardAction>
                                </RCard>
                            </Box>
                        ))}
                    </Box>
                </LegendBox>
                <TestCard />
            </Box>
        </React.Fragment>
    );
};

export default CardsContainer;
