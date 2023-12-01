import bgImage from "./loginGraphic.png"
import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        background: {
        default: "#1D1D1D"
        },
        text: {
            primary: "white"
        }
      }, 
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              overflow: "hidden",
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%"
              }
            }
          }
        }
      }
  );