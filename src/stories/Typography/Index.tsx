import { ThemeProvider } from "@emotion/react";
import {Typography} from "@mui/material";
// import { CustTypoTheme } from "./MyTheme";
import { CustTypoTheme } from "../MyTheme";

interface PropsTypes{
    label?: string;
    align?: "center" | "left" | "right" | "inherit" | "justify";
    variate?: "inherit" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline";
    gutterButton?: boolean;
    paragraph?: boolean;
    color?: "primary"| "secondary";
}

export default function CustTypography(props:PropsTypes){
    return (
        <ThemeProvider theme={CustTypoTheme}>
        <Typography align={props.align} 
        variant={props.variate} 
        gutterBottom={props.gutterButton} 
        paragraph={props.paragraph}
        sx={{
            '&:hover':{
                color: 'primary.main'
            },
            width: "72px",
            height: "30px"
        }}
        >{props.label}</Typography>
        </ThemeProvider>
    );
}