
//import "./CheckBox.css";
import Checkbox from '@mui/material/Checkbox';
// import { checkTheme } from "./MyTheme";
import { myTheme } from './MyTheme';
import { ThemeProvider } from "@emotion/react";
import { FormLabel } from '@mui/material';

interface propsTypes {
    label?: string;
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "default";
    size?: "small" | "medium";
    defaultChecked?: any
}

// export default function CheckBox(props:propsTypes) {
//     //const  classes = "check-box "+props.color+" "+ props.size;
//     //let flag = false;
//     //if(props.defaultChecked) flag=true;
//     let font = "24px";
//     let color = "lightgray";
//     if(props.size === "sm") font = "14px";
//     if(props.size === "lg") font = "30px";
//     if(props.color === "primary") color = "skyblue";
//     const style = {
//         color : color,
//         fontSize : font
//     };

//     return (
//         <div>
//             <input type="checkbox" style={style} value="box" />
//             <label>{props.label}</label>
//         </div>
//     );
// }

export default function CheckBox(props: propsTypes) {
    return (
        <ThemeProvider theme={myTheme}>
            <Checkbox
                defaultChecked
                sx={{
                    // '&.Mui-checked': {
                    //     color: green[600],
                    // },
                    // '$:hover':{
                    //     color : 'primary.dark'
                    // }
                    color: 'primery500.main'
                }}
                size={props.size}
                //color= 'primary'
            />
            <FormLabel>
                {props.label}
            </FormLabel>
        </ThemeProvider>
    );
}