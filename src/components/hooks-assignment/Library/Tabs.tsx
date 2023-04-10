import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BookCard from './BookCard';
import { data } from '../data';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabBar() {
    const [value, setValue] = React.useState(0);
    const [libData, setLibData] = React.useState([...data]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const getIndexId = (id: number) => {
        data[id].read = !data[id].read;
        console.log(id, data[id]);
        setLibData([...data]);
    };

    React.useEffect(() => {
        console.log(libData);
    }, [...data]);


    return (
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', position: "sticky", top: "65px"}}>
                    <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab  label="currently reading" {...a11yProps(0)} />
                        <Tab label="finished" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5%", rowGap: "20px" }}>
                        {libData.filter(book => book.read !== true).map((book, index) => {
                            return <BookCard title={book.title}
                                author={book.author}
                                img={book.img}
                                time={book.time}
                                readers={book.readers}
                                read={book.read}
                                key={index}
                                id={book.index}
                                getIndex={getIndexId}
                            />;
                        })}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5%", rowGap: "20px" }}>
                        {libData.filter(book => book.read === true).map((book, index) => {
                            return <BookCard title={book.title}
                                author={book.author}
                                img={book.img}
                                time={book.time}
                                readers={book.readers}
                                read={book.read}
                                key={index}
                                id={book.index}
                                getIndex={getIndexId}
                            />;
                        })}
                    </div>
                </TabPanel>
            </Box>
    );
}
