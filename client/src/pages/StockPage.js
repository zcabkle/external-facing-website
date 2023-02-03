import React, { useState, useEffect } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "../styles.css"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import StockListItem from "../components/StockListItem";

const StockPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      fetch("http://localhost:8080/items")
        .then(res => res.json())
        .then(res => setItems(res.items.value))
        .then(() => setLoading(false));
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, []);

  if (loading || error) {
    return <span>{error || 'Loading...'}</span>;
  }

  const listObject = <List>
    {items.map((d) => (
      <ListItem>
        <StockListItem name={d.cr967_name} image={d.cr967_image} guid={d.cr967_itemid} description={d.cr967_description} qty={d.cr967_quantity} share_qty={d.cr967_sharequantitywith} stocklvl={d.cr967_stocklevel} share_stocklvl={d.cr967_sharestocklevelwith} foodbankkey={d._cr967_foodbankkey_value} />
      </ListItem>
    ))}
  </List>

  return (
    <Container maxWidth="100%">
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '93vh' }}>
        <Box sx={{ bgcolor: '#00126b', height: '7vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>Items</h1>
        </Box>
        <Box sx={{ overflow: 'auto', bgcolor: 'fff111', height: '86vh' }}>
          {listObject}
        </Box>
      </Box>
    </Container>
  );
};

export default StockPage;