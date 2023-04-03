import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import { useEffect } from "react";
//import axios from "axios";
import { getCall } from "../axiosAPI/mock-server-APIs";

export default function CustSvg() {
    //const [getData, setGetData] = useState({});
    useEffect(()=>{
        getCall().then(data=>console.log(data));
        // postCall().then(data=> console.log(data));
        // putCall().then(data=> console.log(data));
        // deleteCall().then(data=> console.log(data));
    },[]);
    return (
        // <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        //     <image href="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.svg" height="50" width="50"/>
        //     <circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/>
        // </svg>
        <Card>
            <Button>Button</Button>
        </Card>
        //<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0MTEqNfS0cb8WCC2PcOyJuJ-PDlvrzpfqWg&usqp=CAU" height="50px" width="50px" />
    );
}