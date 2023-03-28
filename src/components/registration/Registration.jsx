import React from "react";
import { Starsky } from "./Starsky";
import logo from "../../assets/images/logo.png";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles(() => ({
  root: {
    borderColor: "white",
  },
  input: {
    color: "white",
  },
}));

const Registration = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(255,255,255)",
      },
      secondary: {
        main: "rgb(255,255,255)",
        borderColor: "rgb(255,255,255)",
      },
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const classes = useStyles();

  return (
    <>
      <div className="h-screen w-screen" style={{background:"linear-gradient(to bottom, #23151d 0%, #9d38cc 100%)"}}>
        <Starsky />
        <div className="text-transparent">h</div>
        <div className="w-10/12 h-5/6 m-auto mt-14">
          <div className="flex flex-row">
            <div style={{ width: "50%" }}>
              <div className="w-32 absolute mx-5 mt-3">
                <img src={logo} alt="logo..."></img>
              </div>
              <div className="ml-3 mt-5">
                <lottie-player
                  src="https://assets3.lottiefiles.com/packages/lf20_jcikwtux.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
            <div style={{ width: "60%" }} className="text-white">
              <div className="m-8">
                <div className="text-5xl font-semibold flex flex-row">
                  Welcome to GoalSp
                  <span style={{marginLeft:"-10px",marginRight:"-8px"}}>
                    <lottie-player
                      src="https://assets8.lottiefiles.com/packages/lf20_sbemphqa.json"
                      background="transparent"
                      speed="1"
                      style={{ width: "4rem" }}
                      loop
                      autoplay
                    ></lottie-player>
                  </span>
                  t
                </div>
                <div className="mt-7 text-lg">
                  Let's get you set up so you can start building your FUTURE !!!
                </div>
                <div className="flex flex-row mt-6">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginRight: "3rem",
                    }}
                  >
                    <AccountCircle sx={{ color: "white", mr: 1, my: 0.5 }} />
                    <ThemeProvider theme={theme}>
                      <TextField
                        id="input-with-sx"
                        label="First Name"
                        variant="standard"
                        className={classes.root}
                        sx={{
                          width: 250,
                          "& .MuiFormLabel-root": {
                            color: "secondary.main",
                          },
                          "& .MuiInputBase-root": {
                            color: "white",
                          },
                        }}
                      />
                    </ThemeProvider>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <PersonAddAltIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                    <ThemeProvider theme={theme}>
                      <TextField
                        id="input-with-sx"
                        label="Last Name"
                        variant="standard"
                        className={classes.root}
                        sx={{
                          width: 250,
                          "& .MuiFormLabel-root": {
                            color: "secondary.main",
                          },
                          "& .MuiInputBase-root": {
                            color: "white",
                          },
                        }}
                      />
                    </ThemeProvider>
                  </Box>
                </div>
                <div className="flex flex-row mt-10">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginRight: "3rem",
                    }}
                  >
                    <LocalPhoneIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                    <ThemeProvider theme={theme}>
                      <TextField
                        id="input-with-sx"
                        label="Phone"
                        variant="standard"
                        className={classes.root}
                        name="phone"
                        sx={{
                          width: 250,
                          "& .MuiFormLabel-root": {
                            color: "secondary.main",
                          },
                          "& .MuiInputBase-root": {
                            color: "white",
                          },
                        }}
                      />
                    </ThemeProvider>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <EmailIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                    <ThemeProvider theme={theme}>
                      <TextField
                        id="input-with-sx"
                        label="Email"
                        variant="standard"
                        className={classes.root}
                        name="email"
                        sx={{
                          width: 250,
                          "& .MuiFormLabel-root": {
                            color: "secondary.main",
                          },
                          "& .MuiInputBase-root": {
                            color: "white",
                          },
                        }}
                      />
                    </ThemeProvider>
                  </Box>
                </div>
                <div className="flex flex-row mt-10">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginRight: "3rem",
                    }}
                  >
                    <KeyIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                    <ThemeProvider theme={theme}>
                      <FormControl
                        className={classes.root}
                        sx={{
                          "& .MuiFormLabel-root": {
                            color: "secondary.main",
                          },
                          width: 250,
                          "& .MuiInputBase-root": {
                            color: "white",
                          },
                        }}
                        variant="standard"
                      >
                        <InputLabel htmlFor="standard-adornment-password">
                          Password
                        </InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                sx={{ color: "white" }}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </ThemeProvider>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <ApartmentIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                    <ThemeProvider theme={theme}>
                      <TextField
                        id="input-with-sx"
                        label="Name of Institute"
                        variant="standard"
                        className={classes.root}
                        sx={{
                          width: 250,
                          "& .MuiFormLabel-root": {
                            color: "secondary.main",
                          },
                          "& .MuiInputBase-root": {
                            color: "white",
                          },
                        }}
                      />
                    </ThemeProvider>
                  </Box>
                </div>
                <div className="mt-10 absolute">
                  <a href="/">
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-10 rounded-full text-xl font-semibold">
                      Sign up
                    </button>
                  </a>
                  <div className="mt-6">
                    Already have an account ?
                    <span>
                      <button className="mx-3 border-2 px-4 py-1 rounded-3xl font-medium">
                        Login
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration