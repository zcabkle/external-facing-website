import { Box, Container, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import * as AiIcons from 'react-icons/ai';

window.user_type = "";

function Item(props) {
  return (
    <Paper style={{ width:'100%', zIndex: '-3', textAlign: 'center', alignContent:'center' }}>
      <img src={"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80"} />
    </Paper>
  )
}

const LandingPage = () => {
  var items = [
    {
      name: "Item 1",
      description: "Text on Item 1."
    },
    {
      name: "Item 2",
      description: "Text on Item 2."
    }
  ]

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container height='100%' width='100%'>
        <Carousel
          NextIcon={<AiIcons.AiFillCaretRight />}        // Change the "inside" of the next button to "next"
          PrevIcon={<AiIcons.AiFillCaretLeft />}
          autoPlay={true}
          interval={5000}
          animation={"fade"}
          navButtonsAlwaysVisible={true}
          style={{ height: "100%", width: '100%', zIndex: '-3' }}
        >
          {
            items.map((item, i) => <Item key={i} item={item} />)
          }
        </Carousel>
      </Container>
    </Box>

  )
}

export default LandingPage;