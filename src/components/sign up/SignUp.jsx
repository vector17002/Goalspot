import * as React from "react";
import logo from "../../assets/images/logo.png";
import background from "../../assets/images/background.jpg";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "5px",
  },
}));

const SignUp = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d580ff",
      },
      secondary: {
        main: "#d580ff",
      },
    },
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const classes = useStyles();
  return (
    <>
      <div
        className="bg-auto bg-no-repeat bg-center h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text-transparent">h</div>
        <div className="h-5/6 w-10/12 bg-white m-auto mt-9">
          <div className="flex flex-row">
            <div
              style={{ width: "50%" }}
              className="bg-gradient-to-t from-indigo-300"
            >
              <div className="absolute w-1/12 ml-5 mt-5">
                <img src={logo} alt="logo..."></img>
              </div>
              <div className="mt-10 ml-8">
                <lottie-player
                  src="https://assets2.lottiefiles.com/packages/lf20_zw0djhar.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style={{ width: "95.6%" }}
                ></lottie-player>
              </div>
            </div>
            <div style={{ width: "50%" }} className="text-slate-600 ">
              <div className="flex justify-end mt-3 mr-6 font-sans">
                <span className="text-lg mt-2">Don't have an account?</span>
                <a href="\">
                  <button className="mx-3 border-2 px-4 py-2 rounded-3xl font-medium">
                    Sign Up
                  </button>
                </a>
              </div>
              <div className="w-7/12 m-auto mt-14">
                <div className="text-5xl font-bold text-black">
                  Welcome Back
                </div>
                <div className="mt-2 text-lg">Login to your account</div>
                <div className="mt-6 text-2xl text-black">Username</div>
                <div className="mt-4">
                  <ThemeProvider theme={theme}>
                    <TextField
                      id="standard-basic"
                      label="Email or phone number"
                      variant="filled"
                      className={classes.root}
                      sx={{
                        "& .MuiFormLabel-root": {
                          color: "secondary.main",
                        },
                        width: 300,
                      }}
                    />
                  </ThemeProvider>
                </div>
                <div className="mt-6 text-2xl text-black">Password</div>
                <div className="mt-3">
                  <ThemeProvider theme={theme}>
                    <FormControl
                      className={classes.root}
                      sx={{
                        "& .MuiFormLabel-root": {
                          color: "secondary.main",
                        },
                        width: 300,
                      }}
                      variant="filled"
                    >
                      <InputLabel htmlFor="filled-adornment-password">
                        Password
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
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
                </div>
                <div className="mt-6 ">
                  <button className="bg-violet-500 text-white py-3 px-10 rounded-full text-lg font-semibold">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp