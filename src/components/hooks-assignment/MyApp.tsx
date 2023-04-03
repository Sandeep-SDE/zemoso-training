
// import TabBar from "./Tabs"; 
// import Navbar from "../components/parent-child/Navbar";
 import TableData from "./TableData";
// import Typography from "@mui/material/Typography";
// import logo from "./zemoso-logo.png";
// import { ThemeProvider } from "@emotion/react";
// //import { darkTheme } from "./MyTheme";
// import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp(){
    return (
        <div>
            {/* <Navbar avatar = {logo}/>
            <Typography sx={{p: "40px", fontWeight:"bold", fontSize:"40px", fontFamily:"serif"}}>My Library</Typography>
            <TabBar/> */}
             <TableData/>
         </div>
        // <ThemeProvider theme={darkTheme}>
        //     <CssBaseline/>
        
        // </ThemeProvider>
    );
}