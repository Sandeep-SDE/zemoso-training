
import * as React from 'react';
import { Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Button, InputAdornment } from '@mui/material';
import { createTheme, Chip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { grey } from "@mui/material/colors";
import { ThemeProvider } from '@emotion/react';
import "./TableData.css";
//import { TableSet } from './data';
import { getCall } from '../../axiosAPI/mock-server-APIs';
//kimport { styled } from '@mui/material/styles';

const tHeader = ["NAME", "ADJUDICATION", "STATUS", "LOCATION", "DATE"];

export default function TableData() {
    const [target, setTarget] = React.useState("");
    const [getData, setGetData] = React.useState<[any]>([{}]);

    // const StyledRow = styled(TableRow)(({ theme }) => ({
    //       backgroundColor: theme.palette.action.hover
    //   }));

    React.useEffect(()=>{
        getCall().then(data=> setGetData(data));
    },[]);
    console.log(getData);
    const onClickHandler = (e:any)=>{
        setTarget(e.target.value);
    };
    const myTheme = createTheme({
        palette: {
            primary: {
                main: grey["600"]
            },
            background: {
                paper: grey["800"]
            }
        },
    });

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "5%" }}>
            <ThemeProvider theme={myTheme}>
                <TableContainer sx={{ width: "70%", border: "2px solid lightgray" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={{ fontWeight: "bold" }} >
                                    Candidate info
                                </TableCell>
                                <TableCell sx={{ display: "flex" }}>
                                    <TextField
                                        sx={{ width: "100%", height:"50%" }}
                                        placeholder="Search any candidate"
                                        id="fullWidth"
                                        onChange={onClickHandler}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant='outlined'><FilterListIcon />Filter</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant='outlined' sx={{ marginLeft: "10px" }}><MoreVertIcon /></Button>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>   
                                {tHeader.map((header, index) => {
                                    return <TableCell key={index} >
                                        <Typography>{header}</Typography>
                                    </TableCell>;
                                })}
                            </TableRow>
                        </TableHead>
                        { target === "" && getData.map((data, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        <a href='/' style={{ textDecoration: "none" }}>{data.name}</a>
                                    </TableCell>
                                    <TableCell >
                                        <Typography>{data.adj}</Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Chip sx={{
                                            borderRadius: "0",
                                            color: (data.status !== "clear") ? "darkorange" : "green",
                                            fontWeight: "bold",
                                        }}
                                            label={data.status}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{data.location}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{data.Date}</Typography>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        { target !== "" && getData.filter(data=> data.name.toLowerCase().includes(target.toLowerCase()) || data.location.toLowerCase().includes(target.toLowerCase()))
                        .map((data, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        <a href='/' style={{ textDecoration: "none" }}>{data.name}</a>
                                    </TableCell>
                                    <TableCell >
                                        <Typography>{data.adj}</Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Chip sx={{
                                            borderRadius: "0",
                                            color: (data.status !== "clear") ? "darkorange" : "green",
                                            fontWeight: "bold",
                                        }}
                                            label={data.status}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{data.location}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{data.Date}</Typography>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </Table>
                </TableContainer>
            </ThemeProvider>
        </div>
    );
}