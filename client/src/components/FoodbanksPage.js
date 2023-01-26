import React, { useState, useEffect } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "./styles.css"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FoodbankItem from "./FoodbankItem";

const FoodbanksPage = () => {
  const [foodbanks, setFoodbanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      fetch("http://localhost:8080/foodbanks")
        .then(res => res.json())
        .then(res => setFoodbanks(res.foodbanks.value))
        .then(() => setLoading(false));
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, []);

  if (loading) {
    return <span>{error || 'Loading...'}</span>;
  }

  //const listFoodbanks = foodbanks.map((d) => <li key={d.cr967_name}>{d.cr967_name}</li>);
  //const listFoodbanksButtons = foodbanks.map((d) => <li><Button variant='contained'>{d.cr967_name} {d.cr967_address}</Button></li>);

  const listObject = <List sx={{ bgcolor: '#ff0000' }} >
    {foodbanks.map((d) => (
      <ListItem>
        <FoodbankItem name={d.cr967_name} address={d.cr967_address} image={d.cr967_image} guid={d.cr967_foodbankid}/>
      </ListItem>
    ))}
  </List>

  return (
    <Container maxWidth="100%">
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '93vh' }}>
        <Box sx={{ bgcolor: '#fff111', height: '7vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>Foodbanks</h1>
        </Box>
        <Box sx={{ overflow: 'auto', bgcolor: 'fff111', height: '86vh' }}>
          {listObject}
        </Box>
      </Box>
    </Container>
  );
};

export default FoodbanksPage;