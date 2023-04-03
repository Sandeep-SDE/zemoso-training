import { ThemeProvider } from "@emotion/react";
import { Button, createTheme, Typography } from "@mui/material";
import { red, blue } from "@mui/material/colors";



export default function BodyChild() {

    const myTheme = createTheme({
        palette: {
            primary: {
                main: red["400"],
                dark: blue["800"]
            }
        },
        typography: {
            h1: {
                fontSize: 400
            }
        }
    });

    return (
        <ThemeProvider theme={myTheme}>
            <div>
                <Typography sx={{ color: "primary.main" }}>This is first</Typography>
                <Typography variant="h1" sx={{ color: "primary.dark" }}>This is second</Typography>
            </div>
            <Button variant="contained" color="secondary">
                click me
            </Button>
        </ThemeProvider>
    );
}