import { Box, Container, Paper, Typography, ButtonGroup, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';

window.user_type = "";

function Item(props) {
  return (
    <Paper style={{ zIndex: '-3', textAlign: 'center', alignContent: 'center' }}>
      <img width="auto" height="500vh" src={props.item.src} />
      <Typography variant="h6">
        {props.item.description}
      </Typography>
    </Paper>
  )
}

const LandingPage = () => {

  const [userType, setUserType] = useState('');
  const [rerendered, setRerendered] = useState(false)

  if(sessionStorage.getItem("userType") && !rerendered){
    setUserType(sessionStorage.getItem("userType"));
    setRerendered(true);
  }

  function ChoosePersona() {
    return (
      <Paper style={{ zIndex: '-3', textAlign: 'center', alignContent: 'center'}}>
        <Typography variant='h6'>Who are you visiting this website as?<br></br></Typography>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          { userType === 'donator' ? <Button sx={{ backgroundColor: 'blue', color: 'white' }} onClick={() => {
            window.sessionStorage.setItem("userType", "donator");
            setUserType('donator')
          }}>Foodbank Donator</Button> : <Button sx={{ color: 'grey' }} variant="outlined" onClick={() => {
            window.sessionStorage.setItem("userType", "donator");
            setUserType('donator')
          }}>Foodbank Donator</Button>}
          { userType === 'user' ? <Button sx={{ backgroundColor: 'blue', color: 'white' }} onClick={() => {
            window.sessionStorage.setItem("userType", "user");
            setUserType('user')
          }}>Foodbank User</Button> : <Button sx={{ color: 'grey' }} variant="outlined" onClick={() => {
            window.sessionStorage.setItem("userType", "user");
            setUserType('user')
          }}>Foodbank User</Button>}
        </ButtonGroup>


        { userType === '' && <Typography variant='body1'> <br></br> </Typography> }

        { userType === 'user' && <Typography variant='body1'> Information here to explain how a foodbank user should use the site. <br></br><br></br></Typography> }

        { userType === 'donator' && <Typography variant='body1'> Information here to explain how a foodbank donator should use the site. <br></br><br></br></Typography> }

      </Paper>
    )
  }

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
        <Carousel
          NextIcon={<AiIcons.AiFillCaretRight />}
          PrevIcon={<AiIcons.AiFillCaretLeft />}
          autoPlay={true}
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