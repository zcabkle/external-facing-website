import { Box, Container, Paper, Typography, ButtonGroup, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import * as AiIcons from 'react-icons/ai';

window.user_type = "";

function Item(props) {
  return (
    <Paper style={{ zIndex: '-3', textAlign: 'center', alignContent: 'center' }}>
      <img width="auto" height="500vh" src={props.item.src} />
      <Typography variant="h5">
        {props.item.description}
        <br></br>
      </Typography>
    </Paper>
  )
}

function ChoosePersona() {
  return (
    <Paper style={{ zIndex: '-3', textAlign: 'center', alignContent: 'center'}}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Paper>
  )
}

const LandingPage = () => {
  var items = [
    {
      name: "Item 1",
      description: "We are requesting donations, it's a great way to help out your local community.",
      src: "./fooddonations.jpg"
    },
    {
      name: "Item 2",
      description: "Text on Item 2.",
      src: "/foodbank_items.jpg"
    },
    {
      name: "Item 3",
      description: "Text on Item 3.",
      src: "/parcel.svg"
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
      <Container maxWidth="xl">
      <ChoosePersona />
      <br></br>
        <Carousel
          NextIcon={<AiIcons.AiFillCaretRight />}
          PrevIcon={<AiIcons.AiFillCaretLeft />}
          autoPlay={false}
          interval={5000}
          animation={"slide"}
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