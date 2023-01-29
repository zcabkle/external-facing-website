import React, { useState, useEffect } from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FoodbankInfo from "../components/FoodbankInfo";


const ItemPage = () => {
    const [itemInfo, setItemInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const guid = window.location.href.split("/").pop()

    useEffect(() => {
        try {
            fetch("http://localhost:8080/items/".concat(guid))
                .then(res => res.json())
                .then(res => setItemInfo(res.item_info.value))
                .then(() => setLoading(false));
        } catch (e) {
            setLoading(false);
            setError(e.message);
        }
    }, []);

    if (loading || error) {
        return <span>{error || 'Loading...'}</span>;
    };

    return (
        <Container maxWidth="100%">
            <CssBaseline />
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '93vh' }}>
                <Box sx={{ bgcolor: '#00126b', height: '7vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Info about item X</h1>
                </Box>
                <Box sx={{ overflow: 'auto', bgcolor: 'fff111', height: '86vh' }}>
                    <FoodbankInfo name={itemInfo[0].cr967_name} address={itemInfo[0].cr967_description} image={itemInfo[0].cr967_image} guid={guid} />
                </Box>
            </Box>
        </Container>
    )
}

export default ItemPage;