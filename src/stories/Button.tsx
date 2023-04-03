import React from "react";
//import "./Button.css";
import Button from '@mui/material/Button';
import { myTheme } from "./MyTheme";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

interface propTypes {
    backgroundColor?: string;
    label?: string;
    color?: "inherit" | "success" | "error" | "warning" | "primary" | "secondary" | "info" ;
    size?: "small" | "medium" | "large";
    onClick?: (() => "void");
    variant?: "text" | "outlined" | "contained";
}



// export default function CustButton(props: propTypes = {backgroundColor: "red", size: "md", }) {
//     let scale = 1;

//     if(props.size === "sm") scale=0.75;
//     if(props.size === "lg") scale = 1.5;

//     const style = {
//         backgroundColor: props.backgroundColor,
//         border: "none",
//         padding: `${scale*0.5}rem ${scale*1}rem`,
//     };

//     return (
//         <div>
//             <button style={style} type="button" onClick={props.onClick}>{props.label}</button>
//         </div>
//     );
// }

const Butn = styled(Button)<{
    color ?: "inherit" | "success" | "error" | "warning" | "primary" | "secondary" | "info",
    backgroundColor?: string,
    // '&:hover' : {
    //     bgcolor: 'primary400.main'
    // }
}>(({color, backgroundColor})=>({
    color: color,
    backgroundColor: backgroundColor
}))

export default function CustButton(props: propTypes) {

    

    return (
        // <ThemeProvider theme={myTheme}>
        //     <Button sx={{
        //         color: props.color,
        //         backgroundColor: props.backgroundColor,
        //         //backgroundColor: props.backgroundColor,
        //         '&:hover' : {
        //             bgcolor: 'primary400.main'
        //         }
        //     }}
        //         size={props.size}
        //         variant={props.variant}
        //         onClick={props.onClick}
        //     >
        //         {props.label}
        //     </Button>
        // </ThemeProvider>
        <ThemeProvider theme={myTheme}>
            <Butn 
                size={props.size}
                variant={props.variant}
                onClick={props.onClick}
            >
                {props.label}
            </Butn>
        </ThemeProvider>
    );
}


