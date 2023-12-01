import { Fade, Grid, Slide, Typography } from "@mui/material";
import { useContext, useState } from "react";

import { IndexContext } from "../../App";
import SlideNavigator from "./SlideNavigator";
import slides from "../../assets/content.json";

const slideStyles = {
  borderRadius: "10px",
  boxShadow: 5,
  m: "6rem auto",
  p: 4,
  flexGrow: 1,
  backgroundColor: "#1D1D1D",
};

function Presentation() {
  const { index } = useContext(IndexContext);

  const [slideDirection, setSlideDirection] = useState(null);

  return (
    <Grid
      container
      item={true}
      direction={"column"}
      xs={7}
      sx={{ m: "0 auto", height: "100vh", justifyContent: "space-between" }}
    >
      {slides.map((slide, i) => {
        if (i + 1 === index) {
          return slideDirection ? (
            <Slide in={true} direction={slideDirection} timeout={800} key={i}>
              <Grid container justifyContent={"center"} sx={{ ...slideStyles }}>
                <Typography variant="h2">{slide.title}</Typography>
              </Grid>
            </Slide>
          ) : (
            <Fade in={true} key={i}>
              <Grid container justifyContent={"center"} sx={{ ...slideStyles }}>
                <Typography variant="h2">{slide.title}</Typography>
              </Grid>
            </Fade>
          );
        }
      })}
      <SlideNavigator
        slideLength={slides.length}
        slideDirection={slideDirection}
        setSlideDirection={setSlideDirection}
      />
    </Grid>
  );
}

export default Presentation;
