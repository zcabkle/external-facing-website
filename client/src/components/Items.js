import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import AppBar from "./AppBar";

const Items = () => {
    const [foodbanks, setFoodbanks] = useState([]);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("http://localhost:3000/items")
        .then(res => res.json())
        .then(res => setItems(res.items.value))
        .then(() => setLoading(false));
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    const listFoodbanks = foodbanks.map((d) => <li key={d.cr967_name}>{d.cr967_name}</li>);
    const listFoodbanksButtons = foodbanks.map((d) => <li><Button variant='contained'>{d.cr967_name}</Button></li>);
    const listItems = items.map((d) => <li key={d.cr967_name}>{d.cr967_name}</li>);
    const listItemsButtons = items.map((d) => <li><Button variant='contained'>{d.cr967_name}</Button></li>)
  
    return (
      <body>
        <h1>Items</h1>
        <div>
          {listItemsButtons}
        </div>
      </body>
    );
  };
  
  export default Items;