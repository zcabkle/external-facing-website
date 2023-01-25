import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import AppBar from "./components/AppBar";
import ApplicationRouter from "./components/ApplicationRouter";

/* class App extends React.Component {
  state = { foodbanks : [], items : [], loading : true}

  componentDidMount() {
    fetch("http://localhost:3000/foodbanks")
      .then(res => res.json())
      .then(res => this.setState({ foodbanks: res.foodbanks.value }))
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(res => this.setState({ items: res.items.value }))
  }

  render() {

    const foodbanks = this.state.foodbanks;
    const items = this.state.items;

    const listFoodbanks = foodbanks.map((d) => <li key={d.cr967_name}>{d.cr967_name}</li>);
    const listFoodbanksButtons = foodbanks.map((d) => <li><Button variant='contained'>{d.cr967_name}</Button></li>);
    const listItems = items.map((d) => <li key={d.cr967_name}>{d.cr967_name}</li>);
    const listItemsButtons = items.map((d) => <li><Button variant='contained'>{d.cr967_name}</Button></li>)

    return (
      <body>
        <h1>base</h1>
        <div>
        { listFoodbanks }
        { listItems }
        { listFoodbanksButtons }
        { listItemsButtons }
        <AppBar/>
        </div>
      </body>
    )
  }
}

export default App */

export default function App() {

  return (
    <div><AppBar/><ApplicationRouter /></div>
    
  );
} 

/* const App = () => {
  const [foodbanks, setFoodbanks] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/foodbanks")
      .then(res => res.json())
      .then(res => setFoodbanks(res.foodbanks.value))
      .then(() => setLoading(false));
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
      <h1>base</h1>
      <div>
        {listFoodbanks}
        {listItems}
        {listFoodbanksButtons}
        {listItemsButtons}
        <AppBar />
      </div>
    </body>
  );
};

export default App; */