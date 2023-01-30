import '../styles.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Button from '@mui/material/Button';


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

function StockListItem({ name, image, description, guid }) {
  const source = 'data:image/png;base64,'.concat(' ').concat(image);
  const url = '/items/'.concat(guid);


  return (
    <div className='list-item'>

      <Grid container sx={{
        spacing: 0.5,
        alignItems: 'center',
      }}>
        <Grid item xs={3} style={{textAlign: "center"}}>
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

      </Grid>
    </div>
  );
}
export default StockListItem;