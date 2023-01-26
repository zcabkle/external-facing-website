import React, { useState, useEffect } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "./styles.css"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import StockItem from "./StockItem";

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

  //const listItems = items.map((d) => <li key={d.cr967_name}>{d.cr967_name}</li>);
  //const listItemsButtons = items.map((d) => <li><Button variant='contained'>{d.cr967_name}</Button></li>)

  const listObject = <List sx={{ bgcolor: '#ff0000' }} >
    {items.map((d) => (
      <ListItem>
        <StockItem name={d.cr967_name}/>
      </ListItem>
    ))}
  </List>

  return (
    <Container maxWidth="100%">
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '93vh' }}>
        <Box sx={{ bgcolor: '#fff111', height: '7vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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