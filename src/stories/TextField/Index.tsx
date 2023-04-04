import { ThemeProvider } from '@emotion/react';
import TextField from '@mui/material/TextField';
//import { TextFieldTheme } from './MyTheme';
import { myTheme } from '../MyTheme';

interface propsTypes {
    variate?:"standard" | "filled" | "outlined" ;
    backgroundColor?:string;
    type?: string;
    label?:string;
}

// export default function InputField(props:propsTypes){
//     let bor = props.variate;
//     if(bor === "standrad") bor = "none";
//     if(bor === "outlined") bor = "1px solid black";
//     const style = {
//         backgroundColor: (props.variate === "filled")? "lightgray": "white",
//         border: bor,
//         padding: "10px",
//         width: "500px",
//         borderRadius: "5px"
//     };

//     return(
//         <div >
//             <input type="text" style={style} placeholder="type here"/>
//         </div>
//     );
// }

export default function InputField(props:propsTypes){
    return(
        <>
        <ThemeProvider theme={myTheme}>
        <TextField 
         variant={props.variate}  
         label={props.label} 
         type={props.type}
         sx={{
            // color: 'primary.main',
            // '&:hover':{
            //     color: 'secondary.main'
            // }
            width: "384px",
            height: "36px",
            borderRadius: '4px',
            gap: '10px'
         }}
         />
        </ThemeProvider>
        </>
    );
}