import { CircularProgress, Grid, Paper, Typography } from "@mui/material";

// import useApi from "./hooks/useApi";

function Posts() {
  const isLoading = false;
  const isError = false;
  const data = false;

  return (
    <Grid container item={true} xs={11} justifyContent={"center"} sx={{ m: "0 auto", mt: "3rem" }}>
      {isLoading && (
        <Grid sx={{ mt: "10rem" }}>
          <CircularProgress sx={{ color: "white" }} />
        </Grid>
      )}

      {isError && (
        <Grid container gap={2} justifyContent={"center"} width={"60%"} sx={{ m: "0 auto", mt: "3rem" }}>
          <Paper sx={{ p: "2rem", width: "100%", backgroundColor: "#333333" }}>
            <Typography align="center" variant="h6">
              It’s not you, It’s us..
            </Typography>
            <Typography align="center" variant="body1">
              Try again later
            </Typography>
          </Paper>
        </Grid>
      )}

      {data && (
        <Grid container gap={2} justifyContent={"center"}>
          {data.map((item, i) => {
            if (i <= 11)
              return (
                <Grid xs={3} item={true} key={i}>
                  <Paper
                    sx={{
                      p: "2rem",
                      width: "100%",
                      backgroundColor: "#333333",
                    }}
                  >
                    <Typography variant="body1">Title:</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        height: "1.5rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Paper>
                </Grid>
              );
          })}
        </Grid>
      )}
    </Grid>
  );
}

export default Posts;
