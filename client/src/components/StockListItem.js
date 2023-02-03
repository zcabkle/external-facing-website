import '../styles.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Button from '@mui/material/Button';
import StockLevelButton from './StockLevelButton';


/* function StockListItem({ name, image, description, guid}) {
  const source = 'data:image/png;base64,'.concat(' ').concat(image);
  const url = '/items/'.concat(guid);
  return (
    
    <div className='list-item'>
      <img src={source} alt='Stock Item' className='list-image'/>
      {name}
      {description}
      <a href={url}>More information icon</a>
    </div>
  );
}
export default StockListItem; */

function StockListItem({ name, image, description, guid, qty, share_qty, stocklvl, share_stocklvl, foodbankkey }) {
  const source = 'data:image/png;base64,'.concat(' ').concat(image);
  const url = '/items/'.concat(guid);

  console.log("Share quantity", share_qty);

  return (
    <div className='list-item'>

      <Grid container sx={{
        spacing: 0.5,
        alignItems: 'center',
      }}>
        <Grid item xs={3} style={{ textAlign: "center" }}>
          <Box
            component="img"
            sx={{
              height: '80%',
              width: '80%',
              maxHeight: '100px',
              maxWidth: '100px',
              borderRadius: '10%',
            }}
            alt="Foodbank."
            src={source}
          />
        </Grid>

        <Grid item xs={8}>
          <Box>
            <p>{name}</p>
            <p>{description ? description : 'No description provided for this item.'}</p>
          </Box>
        </Grid>

        <Grid item xs={1} >
          <Box sx={{ fontSize: 100 }}>
            <Button><a href={url}><ArrowCircleRightOutlinedIcon style={{ color: '#00126b' }} /></a></Button>
          </Box>
        </Grid>

        <Grid item xs={3} >
        </Grid>

        <Grid item xs={4} >
          <Box sx={{ fontSize: 10 }}>
            {share_stocklvl == 2 &&
              <StockLevelButton stocklevel={stocklvl} />
            }
          </Box>
        </Grid>

        <Grid item xs={2} >
          <Box sx={{ fontSize: 10 }}>
            {share_qty == 2 &&
              <p>Quantity: {qty}</p>
            }
          </Box>
        </Grid>



      </Grid>
    </div>
  );
}
export default StockListItem;