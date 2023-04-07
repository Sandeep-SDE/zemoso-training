import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
//import axios from "axios";
import { getServerData } from "../axiosAPI/mock-server-APIs";

export default function ServerResponse() {
    const [getData, setGetData] = useState<any>([{}]);
    useEffect(()=>{
        getServerData().then(data=>setGetData(data));
        // postCall().then(data=> console.log(data));
        // putCall().then(data=> console.log(data));
        // deleteCall().then(data=> console.log(data));
    },[]);
    return (
        <div>
            <div data-testId="test-case">{getData.name}</div>
        <Card>
            <Button>Button</Button>
        </Card>
        </div>
    );
}