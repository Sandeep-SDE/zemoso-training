import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Typography } from "@mui/material";
import "./NavBar.css";

export default function Navbar(props:any){
    return (
        <div className="nav-bar">
            <div className="org" style={{color : "inherit" }}><Avatar src={props.avatar}/>Zemoso</div>
            <div className='dummy-content'>
                <SearchIcon/>
                <Typography>Explore</Typography>
                <Typography>My Library</Typography>
            </div>
            <div className="routes">
                <Typography>Home</Typography>
                <Typography>Profile</Typography>
                <Typography>login</Typography>
            </div>
        </div>
    );
}