import "./App.css";
// import MyRouter from "./routes/router";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const options = ["Option 1", "Option 2"];
function App() {
  const [value, setValue] = React.useState(options[0]);
  return (
    // <MyRouter />
    <>
      <div className="container" sx={{}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0px 15px 0px",
          }}
        >
          <Typography component="div">
            Try{" "}
            <Link
              href="#"
              sx={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}
            >
              Sign
            </Link>{" "}
            free for 14 days
          </Typography>
          <Typography component="div">
            Already have Formstack Account?{" "}
            <Link href="#" sx={{ textDecoration: "none" }}>
              {" "}
              start your trail in app
            </Link>
          </Typography>
        </Box>
        <Card sx={{ width: "70%", margin: "auto" }}>
          <CardActionArea>
            <CardContent>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="div">
                      FIRST NAME
                    </Typography>
                    <TextField
                      fullWidth
                      label="Required"
                      id="outlined-required"
                      defaultValue="Smith"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="div">
                      LAST NAME
                    </Typography>
                    <TextField
                      fullWidth
                      label="Required"
                      id="outlined-required"
                      defaultValue="John"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h5" component="div">
                      WORK EMAIL
                    </Typography>
                    <TextField
                      fullWidth
                      label="Required"
                      id="outlined-required"
                      defaultValue="smith@gmail.com"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h5" component="div">
                      PASSWORD
                    </Typography>
                    <TextField
                      fullWidth
                      label="Required"
                      type="password"
                      id="outlined-required"
                      defaultValue="helloword"
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Typography variant="h5" component="div">
                      ORGANIZATION NAME
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-required"
                      label="Required"
                      defaultValue="Hello World"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h5" component="div">
                      OGANIZATION SIZE
                    </Typography>
                    <Autocomplete
                      fullWidth
                      options={options}
                      renderInput={(params) => (
                        <TextField {...params} label="Controllable" />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h5" component="div">
                      INDUSTRY
                    </Typography>
                    <Autocomplete
                      fullWidth
                      options={options}
                      renderInput={(params) => (
                        <TextField {...params} label="Controllable" />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography component="div">
                      Formstack has updated our Terms of Service effective
                      January 4, 2023. We encourage you to read the document in
                      its entirety.
                    </Typography>
                  </Grid>
                  <Grid item xs={10} md={10}>
                    <Box sx={{ display: "flex", alignItems: "start" }}>
                      <Checkbox {...label} checked />

                      <Typography component="div" sx={{ marginTop: "7px" }}>
                        I understand and agree to the{" "}
                        <Link href="#">
                          Formstack Privacy Policy, Software Services Agreement{" "}
                        </Link>{" "}
                        and
                        <Link href="#">Acceptable Use Policy.</Link>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid item xs={12} md={12}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ marginTop: "20px" }}
                >
                  Start free trail
                </Button>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
export default App;
