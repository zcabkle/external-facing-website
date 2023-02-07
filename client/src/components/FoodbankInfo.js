import '../styles.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function FoodbankInfo({ name, address, image, guid }) {
  const source = 'data:image/png;base64,'.concat(' ').concat(image);

  return (
    <div className='foodbank-info-item'>
      <Grid container sx={{
        spacing: 0.5,
        alignItems: 'center',
      }}>
        <Grid item xs={12} style={{textAlign: "center"}}><img src={source} alt='Foodbank' className='list-image' /></Grid>
        
        <p>{name}</p>
        <p>{address}</p>
        <p>{guid}</p>
        <p>Other information/fields will be added here</p>
        <Button>Parcels</Button>
        <Button>Items</Button>
      </Grid>
    </div>
  );
}
export default FoodbankInfo;