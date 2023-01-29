import '../styles.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function FoodbankListItem({ name, address, image, guid }) {
  const source = 'data:image/png;base64,'.concat(' ').concat(image);
  const url = '/foodbanks/'.concat(guid);
  return (

    <div className='list-item'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          borderRadius: 1,
          minHeight: '100%',
          maxHeight: '100%',
          alignItems: 'center'
        }}
      >

        <Grid container sx={{
          spacing: 0.5,
          alignItems: 'center'
        }}>
          <Grid item xs={3}>


            <Box
              component="img"
              sx={{
                height: 60,
                width: 60,
                borderRadius: '10%'
              }}
              alt="Foodbank."
              src={source}
            />

          </Grid>
          <Grid item xs={8}>
            <Box>
              {name}
              {address}
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box>
              <a href={url}><ArrowCircleRightOutlinedIcon style={{ color: '#00126b' }} /></a>
              
            </Box>
          </Grid>
        </Grid>

      </Box>


    </div>
  );
}
export default FoodbankListItem;