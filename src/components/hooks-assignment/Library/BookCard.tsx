import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

export default function BookCard(props: any) {
    const onClickHandler = ()=>{
        props.getIndex(props.id);
    };

    return (
        <Card sx={{ width: 300 }}>
            <CardMedia
                sx={{ height: 400 }}
                image={props.img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: "15px", fontWeight: "bold" }}>
                    {props.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: "center", fontSize: "10px" }}>
                    {props.author}
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                        <AccessTimeOutlinedIcon sx={{ fontSize: "20px", color: "lightgray" }} />
                        <Typography sx={{ fontSize: "15px", color: "lightgray" }}>{props.time}-minute read</Typography>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Person2OutlinedIcon sx={{ fontSize: "20px", color: "gray" }} />
                        <Typography sx={{ fontSize: "15px" }}>{props.readers}k reads</Typography>
                    </div>
                </div>
            </CardContent>
            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button size="small" onClick={onClickHandler}>{props.read? "Read again" : "Finished"}</Button>
            </CardActions>
        </Card>
    );
}