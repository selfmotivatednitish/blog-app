import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Card, CardContent, CardMedia, IconButton } from "@mui/material";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images1 = [
    {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath:
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
        label: "Bird",
        imgPath:
            "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
        label: "Bali, Indonesia",
        imgPath:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
    },
    {
        label: "Goč, Serbia",
        imgPath:
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
    }
];

const images2 = [
    {
        label: "Bird",
        imgPath:
            "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
        label: "Bali, Indonesia",
        imgPath:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
    },
    {
        label: "Goč, Serbia",
        imgPath:
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath:
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
    }
];

const images3 = [
    {
        label: "Bali, Indonesia",
        imgPath:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
    },
    {
        label: "Goč, Serbia",
        imgPath:
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath:
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
        label: "Bird",
        imgPath:
            "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
    }
];

function CustomCarousels() {
    const theme = useTheme();
    const [activeStep1, setActiveStep1] = React.useState(0);
    const [activeStep2, setActiveStep2] = React.useState(0);
    const [activeStep3, setActiveStep3] = React.useState(0);
    const maxSteps = images1.length;

    const handleNext = () => {
        setActiveStep1((prevActiveStep) => prevActiveStep + 1);
        setActiveStep2((prevActiveStep) => prevActiveStep + 1);
        setActiveStep3((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep1((prevActiveStep) => prevActiveStep - 1);
        setActiveStep2((prevActiveStep) => prevActiveStep - 1);
        setActiveStep3((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep1(step);
        setActiveStep2(step);
        setActiveStep3(step);
    };

    return (
        <Box sx={{ width: "100%", display: "flex" }}>
            <Box
                sx={{
                    width: "25%",
                    flexGrow: 1,
                    marginRight: "10px",
                    height: "300px",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep1}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images1.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep1 - index) <= 2 ? (
                                <Box
                                    sx={{
                                        height: 255,
                                        display: "block",

                                        overflow: "hidden",
                                        width: "100%"
                                    }}
                                >
                                    <Card sx={{ display: "flex", height: 155 }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: "80%",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <CardContent sx={{ flex: "1 0 auto" }}>
                                                <Typography component="div" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="text.secondary"
                                                    component="div"
                                                >
                                                    Mac Miller
                                                </Typography>
                                            </CardContent>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    pl: 1,
                                                    pb: 1
                                                }}
                                            >
                                                <IconButton aria-label="previous">
                                                    {theme.direction === "rtl" ? (
                                                        <SkipNextIcon />
                                                    ) : (
                                                        <SkipPreviousIcon />
                                                    )}
                                                </IconButton>
                                                <IconButton aria-label="play/pause">
                                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                                </IconButton>
                                                <IconButton aria-label="next">
                                                    {theme.direction === "rtl" ? (
                                                        <SkipPreviousIcon />
                                                    ) : (
                                                        <SkipNextIcon />
                                                    )}
                                                </IconButton>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                width: "30%",
                                                display: "flex",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={step.imgPath}
                                                alt="Live from space album cover"
                                            />
                                        </Box>
                                    </Card>
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
            </Box>
            <Box sx={{ width: "50%", flexGrow: 1 }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep2}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images2.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep2 - index) <= 2 ? (
                                <Box
                                    sx={{
                                        height: 255,
                                        display: "block",
                                        overflow: "hidden",
                                        width: "100%"
                                    }}
                                >
                                    <Card sx={{ display: "flex" }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: "80%",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <CardContent sx={{ flex: "1 0 auto" }}>
                                                <Typography component="div" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="text.secondary"
                                                    component="div"
                                                >
                                                    Mac Miller
                                                </Typography>
                                            </CardContent>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    pl: 1,
                                                    pb: 1
                                                }}
                                            >
                                                <IconButton aria-label="previous">
                                                    {theme.direction === "rtl" ? (
                                                        <SkipNextIcon />
                                                    ) : (
                                                        <SkipPreviousIcon />
                                                    )}
                                                </IconButton>
                                                <IconButton aria-label="play/pause">
                                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                                </IconButton>
                                                <IconButton aria-label="next">
                                                    {theme.direction === "rtl" ? (
                                                        <SkipPreviousIcon />
                                                    ) : (
                                                        <SkipNextIcon />
                                                    )}
                                                </IconButton>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                width: "30%",
                                                display: "flex",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={step.imgPath}
                                                alt="Live from space album cover"
                                            />
                                        </Box>
                                    </Card>
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
            </Box>
            <Box
                sx={{
                    width: "25%",
                    flexGrow: 1,
                    marginLeft: "10px",
                    height: "300px",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep3}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images3.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep3 - index) <= 2 ? (
                                <Box
                                    sx={{
                                        height: 255,
                                        display: "block",
                                        overflow: "hidden",
                                        width: "100%"
                                    }}
                                >
                                    <Card sx={{ display: "flex" }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: "80%",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <CardContent sx={{ flex: "1 0 auto" }}>
                                                <Typography component="div" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="text.secondary"
                                                    component="div"
                                                >
                                                    Mac Miller
                                                </Typography>
                                            </CardContent>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    pl: 1,
                                                    pb: 1
                                                }}
                                            >
                                                <IconButton aria-label="previous">
                                                    {theme.direction === "rtl" ? (
                                                        <SkipNextIcon />
                                                    ) : (
                                                        <SkipPreviousIcon />
                                                    )}
                                                </IconButton>
                                                <IconButton aria-label="play/pause">
                                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                                </IconButton>
                                                <IconButton aria-label="next">
                                                    {theme.direction === "rtl" ? (
                                                        <SkipPreviousIcon />
                                                    ) : (
                                                        <SkipNextIcon />
                                                    )}
                                                </IconButton>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                width: "30%",
                                                display: "flex",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={step.imgPath}
                                                alt="Live from space album cover"
                                            />
                                        </Box>
                                    </Card>
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
            </Box>
        </Box>
    );
}

export default CustomCarousels;
